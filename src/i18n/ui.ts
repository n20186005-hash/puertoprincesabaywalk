import fil from './fil.json';
import en from './en.json';
import zh from './zh.json';
import { siteConfig } from '../config';

export const defaultLang = 'fil';
export const languagesList = ['fil', 'en', 'zh'] as const;

export const languages: Record<string, string> = {
  fil: 'Filipino',
  en: 'English',
  zh: '中文',
};

export const ui: Record<string, any> = { fil, en, zh };

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  const lang = seg[0];
  return (languagesList as readonly string[]).includes(lang) ? lang : defaultLang;
}

export function getI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const messages = ui[lang];
  const t = (key: string): string => {
    const found = key
      .split('.')
      .reduce<any>((o, i) => (o == null ? undefined : o[i]), messages);
    return found ?? '';
  };
  return { lang, messages, t };
}

export function buildAlternates(path = ''): Record<string, string> {
  const base = siteConfig.baseUrl;
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const mk = (l: string) => `${base}/${l}${clean ? '/' + clean : ''}`;
  return {
    fil: mk('fil'),
    en: mk('en'),
    zh: mk('zh'),
    xDefault: mk('fil'),
  };
}

export function htmlLangAttr(lang: string): string {
  if (lang === 'zh') return 'zh-CN';
  return lang;
}
