"""
Download gallery photos for Puerto Princesa City Baywalk Park.
Uses LoremFlickr (302->live.staticflickr) with Palawan/Philippines tags.
"""

import os
import sys
import time
import subprocess

# Fix encoding for Windows console
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

try:
    import requests
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "--quiet"])
    import requests

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
GALLERY_DIR = os.path.join(PROJECT_DIR, "public", "gallery")
os.makedirs(GALLERY_DIR, exist_ok=True)

TAGS = [
    "palawan",
    "philippines+sunset",
    "puerto+princesa",
    "seaside+philippines",
    "tropical+boardwalk",
    "palawan+beach",
    "philippines+waterfront",
    "philippines+seafood+market",
    "sunset+promenade",
    "palawan+philippines+tropical",
    "philippines+bay+walk",
    "pier+philippines",
]

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}


def download_one(url, filepath, max_retries=4):
    for attempt in range(max_retries):
        try:
            r = requests.get(url, headers=HEADERS, timeout=30, allow_redirects=True)
            ctype = r.headers.get("content-type", "")
            if r.status_code == 200 and len(r.content) > 5000 and "image" in ctype:
                with open(filepath, "wb") as f:
                    f.write(r.content)
                return True, len(r.content)
            print(f"    try {attempt+1}: HTTP {r.status_code} ({len(r.content)}B)")
        except Exception as e:
            print(f"    try {attempt+1}: {e}")
        time.sleep(2 + attempt)
    return False, 0


def main():
    print("-" * 50)
    print("Downloading gallery photos...")
    print("-" * 50)

    success = 0
    for i, tag in enumerate(TAGS):
        idx = i + 1
        fpath = os.path.join(GALLERY_DIR, f"baywalk-park-{idx}.jpg")

        if os.path.exists(fpath) and os.path.getsize(fpath) > 5000:
            kb = os.path.getsize(fpath) // 1024
            print(f"  [{idx:2d}/12] EXISTS          baywalk-park-{idx}.jpg ({kb} KB)")
            success += 1
            continue

        print(f"  [{idx:2d}/12] Downloading...   (tag: {tag})")
        url = f"https://loremflickr.com/800/600/{tag}"
        ok, size = download_one(url, fpath)

        if ok:
            print(f"           OK                ({size//1024} KB)")
            success += 1
        else:
            print(f"           FAILED")

    print("-" * 50)
    print(f"Summary: {success}/12 photos ready")
    print("-" * 50)
    return 0 if success >= 6 else 1


if __name__ == "__main__":
    sys.exit(main())
