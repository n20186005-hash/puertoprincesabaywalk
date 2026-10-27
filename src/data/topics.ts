/**
 * Long-tail topic pages for Puerto Princesa City Baywalk Park.
 *
 * 10 topics x 3 languages (fil / en / zh). Each topic carries genuinely
 * deeper, practical detail than the homepage (walking distances, prices,
 * step-by-step directions, month tables) so the pages satisfy E-E-A-T rather
 * than duplicating the visitor guide.
 *
 * Slugs are language-neutral and identical across locales so hreflang and
 * internal links stay consistent.
 */

export const TOPIC_SLUGS = [
  'restaurants',
  'things-to-do',
  'sunset-photos',
  'best-time',
  'getting-there',
  'parking',
  'nearby-attractions',
  'itinerary',
  'safety-tips',
  'tides-weather',
  'family-guide',
  'accessibility',
  'rainy-day',
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];
export type TopicLang = 'fil' | 'en' | 'zh';

export interface TopicSection {
  id: string;
  title: string;
  body: string;
}
export interface TopicFaq {
  q: string;
  a: string;
}
export interface TopicContent {
  /** SEO title (used as <title>) */
  title: string;
  /** Meta description */
  description: string;
  /** Visible H1 */
  h1: string;
  /** Lead paragraph shown under H1 */
  lead: string;
  /** Last content review date (shown as a trust signal) */
  updated: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  /** Other topic slugs to cross-link */
  related: TopicSlug[];
}

export const topics: Record<TopicSlug, Record<TopicLang, TopicContent>> = {
  restaurants: {
    en: {
      title: 'Baywalk Restaurants & Seafood — Where to Eat at Puerto Princesa Baywalk',
      description:
        'A practical dining guide to the Baywalk: charcoal seafood grills, waterfront restaurants, street food, and bakeries — with typical prices, what to order, and how to pay.',
      h1: 'Where to Eat at the Baywalk',
      lead:
        "The Baywalk is Puerto Princesa's open-air dining room. Lining Sandoval Street and the waterfront are charcoal seafood grills, casual restaurants built on stilts over the Sulu Sea, movable street-food stalls, and bakeries. Here is what to expect, what to order, and what it costs.",
      updated: 'October 2026',
      sections: [
        {
          id: 'seafood-grills',
          title: 'Seafood Grills',
          body: 'Fresh catch — fish, squid, shrimp, and crab — is cooked to order over open charcoal grills that line the promenade. Expect roughly PHP 150–400 per grill. Point at what you want; most stalls weigh and price by the piece or by weight.',
        },
        {
          id: 'waterfront-restaurants',
          title: 'Casual & Waterfront Restaurants',
          body: 'Sit-down spots near the water serve Filipino and seafood menus, some built on stilts over the sea. A meal runs about PHP 250–800 per person — comfortable if you want a table, a fan, and a view.',
        },
        {
          id: 'street-food',
          title: 'Street Food & Snacks',
          body: 'Grilled skewers (ihaw-ihaw), local bites, fresh fruit shakes, and ice cream come from movable stalls. Most items cost PHP 20–100 — ideal for grazing as you stroll.',
        },
        {
          id: 'bakeries',
          title: 'Bakeries & Sweets',
          body: 'Hopia, pastries, and takeaway snacks are handy for an afternoon treat or a picnic before sunset. Budget around PHP 50–250.',
        },
        {
          id: 'paying',
          title: 'How to Pay & Order',
          body: "Bring cash — stalls and most small eateries don't take cards. There is no fixed menu at the grills, so agree on the price before it is cooked. Arrive after 5 PM for the widest choice as the evening crowd builds.",
        },
      ],
      faq: [
        {
          q: 'Are there vegetarian options at the Baywalk?',
          a: 'Yes, though seafood dominates. Bakeries, fruit shakes, grilled vegetables, and some casual restaurants offer vegetarian dishes — ask the stall what is meat-free.',
        },
        {
          q: 'What is the average food budget at the Baywalk?',
          a: 'Street food and a shake cost about PHP 100–200; a seafood-grill dinner for one is typically PHP 300–500; a sit-down waterfront meal runs PHP 500–800.',
        },
        {
          q: 'Do Baywalk restaurants take credit cards?',
          a: 'Most stalls and smaller eateries are cash-only. Carry small bills and coins; a few larger restaurants may accept cards, but cash is safest.',
        },
        {
          q: 'When is the best time to eat at the Baywalk?',
          a: 'From about 5 PM to 9 PM, when grills are firing and the sunset crowd arrives. Earlier in the afternoon only a few stalls may be open.',
        },
      ],
      related: ['sunset-photos', 'getting-there', 'things-to-do'],
    },
    fil: {
      title: 'Mga Restawran at Seafood sa Baywalk — Saan Kakain sa Puerto Princesa Baywalk',
      description:
        'Praktikal na gabay sa pagkain sa Baywalk: charcoal seafood grill, mga casual na restawran sa tabi ng dagat, street food, at bakery — may tipikal na presyo, ano ang i-order, at paano magbayad.',
      h1: 'Saan Makakain sa Baywalk',
      lead:
        'Ang Baywalk ay ang open-air na dining room ng Puerto Princesa. Sa tabi ng Sandoval Street at waterfront ay may mga charcoal seafood grill, casual na restawran na nakatayo sa mga poste sa ibabaw ng tubig, movable na street-food stall, at bakery. Narito kung ano ang aasahan, ano ang o-orderin, at magkano.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'seafood-grills',
          title: 'Seafood Grills',
          body: 'Sariwang huli — isda, pusit, hipon, at alimango — ay inihaw sa order sa mga charcoal grill na naka-line sa promenade. Maghanda ng humigit-kumulang PHP 150–400 bawat grill. Turohin ang gusto mo; karamihan sa mga stall ay nagpe-presyo ayon sa piraso o timbang.',
        },
        {
          id: 'waterfront-restaurants',
          title: 'Casual at Waterfront na mga Restawran',
          body: 'Ang mga sit-down na spot malapit sa tubig ay naghahain ng Filipino at seafood menu, ang iba ay nakatayo sa mga poste sa ibabaw ng tubig. Ang isang kainan ay mga PHP 250–800 bawat tao — komportable kung gusto mo ng mesa, fan, at tanawin.',
        },
        {
          id: 'street-food',
          title: 'Street Food at Snacks',
          body: 'Ang grilled skewers (ihaw-ihaw), lokal na bite, sariwang fruit shake, at ice cream ay mula sa movable na mga stall. Karamihan ay PHP 20–100 — perpekto para mag-grazing habang naglalakad.',
        },
        {
          id: 'bakeries',
          title: 'Mga Bakery at Sweets',
          body: 'Ang hopia, pastry, at takeaway snack ay madaling para sa hapon na treat o picnic bago ang sunset. Budget ng humigit-kumulang PHP 50–250.',
        },
        {
          id: 'paying',
          title: 'Paano Magbayad at Umorder',
          body: "Magdala ng cash — ang mga stall at karamihan ng maliliit na eatery ay hindi tumatanggap ng card. Walang fixed na menu sa mga grill, kaya magkasundo sa presyo bago iluto. Dumating pagkatapos ng 5 PM para sa pinakamaraming pagpipilian habang bumubuo ang crowd ng gabi.",
        },
      ],
      faq: [
        {
          q: 'May vegetarian option ba sa Baywalk?',
          a: 'Oo, kahit ang seafood ang domina. Ang bakery, fruit shake, grilled vegetables, at ilang casual na restawran ay may vegetarian dish — tanong sa stall kung ano ang meat-free.',
        },
        {
          q: 'Magkano ang karaniwang food budget sa Baywalk?',
          a: 'Ang street food at isang shake ay PHP 100–200; ang seafood-grill dinner para sa isa ay karaniwang PHP 300–500; ang sit-down na waterfront meal ay PHP 500–800.',
        },
        {
          q: 'Tumatanggap ba ng credit card ang mga restawran sa Baywalk?',
          a: 'Ang karamihan sa stall at maliliit na eatery ay cash lang. Magdala ng small bills at coins; ang ilang malalaking restawran ay maaaring tumanggap ng card, ngunit ang cash ang pinakaligtas.',
        },
        {
          q: 'Kailan ang pinakamagandang oras para kumain sa Baywalk?',
          a: 'Mula bandang 5 PM hanggang 9 PM, kapag nag-iinit ang grill at dumadating ang crowd ng sunset. Maaga pa sa hapon, ilang stall lang ang bukas.',
        },
      ],
      related: ['sunset-photos', 'getting-there', 'things-to-do'],
    },
    zh: {
      title: '海湾步道海鲜与餐厅指南 — 普林塞萨港海湾步道在哪吃',
      description: '实用就餐指南：炭烤海鲜、海滨休闲餐厅、街头小吃与面包店——含参考价格、点什么以及怎么付款。',
      h1: '海湾步道在哪里吃',
      lead: '海湾步道是普林塞萨港的露天大餐厅。Sandoval 街与海滨一线排开炭火海鲜烧烤、建在水面上的休闲餐厅、可移动的小吃摊和面包店。下面是你能期待的、该点什么以及大概花费。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'seafood-grills',
          title: '炭烤海鲜',
          body: '现捞的鱼、鱿鱼、虾和蟹按单在炭火上现烤，沿长廊排开。每份约 PHP 150–400。指给你想要的即可；多数摊位按只或按重量称重计价。',
        },
        {
          id: 'waterfront-restaurants',
          title: '海滨休闲餐厅',
          body: '靠近水边的堂食店供应菲律宾菜与海鲜菜单，有的就架在水面上的木桩上。人均约 PHP 250–800，想要桌子、风扇和海景时最舒服。',
        },
        {
          id: 'street-food',
          title: '街头小吃与零食',
          body: '烤串（ihaw-ihaw）、当地小吃、鲜榨果昔和冰淇淋来自可移动的小摊，多数 PHP 20–100，边走边吃最合适。',
        },
        {
          id: 'bakeries',
          title: '面包店与甜点',
          body: '老婆饼、糕点和外带零食适合日落前当下午茶或野餐，预算约 PHP 50–250。',
        },
        {
          id: 'paying',
          title: '怎么付款与点单',
          body: '请带现金——小吃摊和多数小店不收卡。烧烤摊没有固定菜单，下锅前先谈好价格。下午 5 点后选择最多，夜场人流也最旺。',
        },
      ],
      faq: [
        {
          q: '海湾步道有素食选择吗？',
          a: '有，尽管以海鲜为主。面包店、果昔、烤蔬菜和部分休闲餐厅提供素食，可向摊主确认哪些不含肉。',
        },
        {
          q: '海湾步道用餐预算大概多少？',
          a: '小吃加一杯果昔约 PHP 100–200；单人炭烤海鲜晚餐通常 PHP 300–500；海滨堂食约 PHP 500–800。',
        },
        {
          q: '海湾步道餐厅收信用卡吗？',
          a: '多数摊位和小店只收现金。备好小额钞票和硬币；个别大店可能刷卡，但现金最稳妥。',
        },
        {
          q: '海湾步道几点吃最好？',
          a: '约下午 5 点到晚上 9 点，此时烧烤火旺、日落人流到来。午后较早时只有少数摊位营业。',
        },
      ],
      related: ['sunset-photos', 'getting-there', 'things-to-do'],
    },
  },

  'things-to-do': {
    en: {
      title: 'Things to Do at the Baywalk — Activities, Music & Nightlife',
      description:
        'What to actually do at Puerto Princesa Baywalk Park: sunset strolls, live music, bike rentals, photo walks, and family time — with tips for each.',
      h1: 'Things to Do at the Baywalk',
      lead:
        'The Baywalk is not a pay-to-enter attraction with rides; it is a living waterfront promenade. Most of the fun is free and unhurried. Here are the activities visitors actually do, from a quiet afternoon walk to an evening of music and seafood.',
      updated: 'October 2026',
      sections: [
        {
          id: 'sunset-stroll',
          title: 'Sunset Stroll',
          body: 'Walk the full promenade end to end in about 20–30 minutes. The paved, flat path is easy for all ages and the Sulu Sea opens up at every gap between the palms.',
        },
        {
          id: 'live-music',
          title: 'Live Music & Street Performers',
          body: 'From around 6 PM local musicians, guitarists, and singers perform along the waterfront. Pull up a bench or simply wander — the music is part of the atmosphere and costs nothing.',
        },
        {
          id: 'biking',
          title: 'Bike Rentals',
          body: 'Bicycles can be rented for roughly PHP 50–100 per hour. The level promenade is an easy, breezy ride, especially in the late afternoon before the crowds.',
        },
        {
          id: 'photography',
          title: 'Photo Walks',
          body: 'The Peacock-Pheasant landmark sign, the palm line, and the seawall are the classic frames. Golden hour (about 5–6 PM) and blue hour just after sunset are the best light.',
        },
        {
          id: 'family',
          title: 'Family Time',
          body: 'Flat paths, open space, benches, and kid-friendly snacks make it easy with children. Keep little ones within arm’s reach near the water at low tide.',
        },
      ],
      faq: [
        {
          q: 'Is the Baywalk free to enjoy?',
          a: 'Yes. There is no entrance fee and no ticket. You only pay for food, bike rental, souvenirs, or transport.',
        },
        {
          q: 'How long should I spend at the Baywalk?',
          a: 'Most visitors stay 2–3 hours: a walk, sunset photos, dinner at a stall, and a little music. Arrive about 4:30 PM and leave around 7 PM.',
        },
        {
          q: 'Can I rent a bike at the Baywalk?',
          a: 'Yes, bicycle rental is typically PHP 50–100 per hour. Tricycles also drop you right at the main entrance.',
        },
        {
          q: 'What should I bring to the Baywalk?',
          a: 'Cash, a phone or camera for sunset shots, light clothing, and a reusable water bottle. Comfortable footwear is enough for the flat promenade.',
        },
      ],
      related: ['sunset-photos', 'itinerary', 'restaurants'],
    },
    fil: {
      title: 'Mga Bagay na Gagawin sa Baywalk — Activities, Music at Nightlife',
      description:
        'Ano ang talagang gagawin sa Puerto Princesa Baywalk Park: sunset stroll, live music, bike rental, photo walk, at family time — may tips sa bawat isa.',
      h1: 'Mga Bagay na Gagawin sa Baywalk',
      lead:
        'Ang Baywalk ay hindi isang pay-to-enter na attraction na may rides; ito ay isang buhay na waterfront promenade. Ang karamihan ng saya ay libre at hindi nagmamadali. Narito ang mga activity na ginagawa talaga ng mga bisita, mula sa tahimik na afternoon walk hanggang sa gabi ng musika at seafood.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'sunset-stroll',
          title: 'Sunset Stroll',
          body: 'Lakarin ang buong promenade mula dulo hanggang dulo sa humigit-kumulang 20–30 minuto. Ang patag at paved na path ay madali para sa lahat ng edad at ang Sulu Sea ay lumalabas sa bawat agwat sa mga niyog.',
        },
        {
          id: 'live-music',
          title: 'Live Music at Street Performers',
          body: 'Mula bandang 6 PM, ang mga lokal na musikero, guitarist, at singer ay tumutugtog sa tabi ng waterfront. Humugong ng bench o simply maglakad — ang musika ay bahagi ng atmosphere at walang bayad.',
        },
        {
          id: 'biking',
          title: 'Bike Rentals',
          body: 'Ang bisikleta ay maaaring rentahan ng humigit-kumulang PHP 50–100 bawat oras. Ang patag na promenade ay madaling, maanghang na biyahe, lalo na sa late afternoon bago ang crowd.',
        },
        {
          id: 'photography',
          title: 'Photo Walks',
          body: 'Ang Peacock-Pheasant landmark sign, ang linya ng niyog, at ang seawall ay ang classic na frame. Ang golden hour (humigit-kumulang 5–6 PM) at blue hour pagkatapos ng sunset ay ang pinakamagandang ilaw.',
        },
        {
          id: 'family',
          title: 'Family Time',
          body: 'Ang patag na path, bukas na espasyo, bench, at kid-friendly na snack ay nagpapadali sa mga bata. Panatilihing malapit ang mga bata sa tubig sa low tide.',
        },
      ],
      faq: [
        {
          q: 'Libre bang tamasin ang Baywalk?',
          a: 'Oo. Walang entrance fee at walang ticket. Magbabayad ka lang para sa pagkain, bike rental, souvenir, o transport.',
        },
        {
          q: 'Gaano katagal dapat sa Baywalk?',
          a: 'Karamihan ng bisita ay nananatili ng 2–3 oras: isang lakad, sunset photos, dinner sa stall, at kaunting musika. Dumating bandang 4:30 PM at umalis bandang 7 PM.',
        },
        {
          q: 'Pwede bang mag-renta ng bike sa Baywalk?',
          a: 'Oo, ang bike rental ay karaniwang PHP 50–100 bawat oras. Ang tricycle din ay naghahatid diretso sa main entrance.',
        },
        {
          q: 'Ano ang dapat dalhin sa Baywalk?',
          a: 'Cash, phone o camera para sa sunset shot, magaang damit, at reusable water bottle. Ang komportableng footwear ay sapat sa patag na promenade.',
        },
      ],
      related: ['sunset-photos', 'itinerary', 'restaurants'],
    },
    zh: {
      title: '海湾步道怎么玩 — 活动、音乐与夜生活',
      description: '普林塞萨港海湾步道实际能做什么：日落散步、现场音乐、租自行车、拍照散步与亲子时光，并附每种玩法的小贴士。',
      h1: '海湾步道怎么玩',
      lead: '海湾步道不是那种买票进场、有游乐设施的景点，而是一条有人气的海滨长廊。大多数乐趣免费且不赶时间。下面是游客实际在做的事，从安静的午后散步到伴随音乐与海鲜的夜晚。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'sunset-stroll',
          title: '日落散步',
          body: '沿长廊从头走到尾约 20–30 分钟。平整的步道对所有年龄都友好，椰树之间的每个缺口都能望见苏禄海。',
        },
        {
          id: 'live-music',
          title: '现场音乐与街头表演',
          body: '约下午 6 点起，当地乐手、吉他手和歌手在水边演出。找条长椅坐下或随意漫步——音乐是氛围的一部分，且免费。',
        },
        {
          id: 'biking',
          title: '租自行车',
          body: '自行车租金约 PHP 50–100/小时。平整的长廊骑起来轻松惬意，尤其人流前的傍晚。',
        },
        {
          id: 'photography',
          title: '拍照散步',
          body: '孔雀雉地标牌、椰林线和海堤是最经典的取景框。黄金时刻（约 5–6 点）和日落后的蓝调时刻光线最好。',
        },
        {
          id: 'family',
          title: '亲子时光',
          body: '平整步道、开阔空间、长椅和适合孩子的零食让带娃很轻松。退潮时看紧靠近水边的孩子。',
        },
      ],
      faq: [
        {
          q: '海湾步道免费吗？',
          a: '免费。没有门票。只在吃饭、租自行车、买纪念品或交通时才花钱。',
        },
        {
          q: '在海湾步道待多久合适？',
          a: '多数游客停留 2–3 小时：散个步、拍日落、在摊位吃晚餐、听会儿音乐。约 4:30 到、7 点左右离开。',
        },
        {
          q: '海湾步道能租自行车吗？',
          a: '可以，自行车通常 PHP 50–100/小时。三轮车也能直接送到正门。',
        },
        {
          q: '去海湾步道该带什么？',
          a: '现金、拍日落的手机或相机、轻薄衣物和可重复使用的水壶。平整步道一双舒服的鞋就够。',
        },
      ],
      related: ['sunset-photos', 'itinerary', 'restaurants'],
    },
  },

  'sunset-photos': {
    en: {
      title: 'Baywalk Sunset & Photo Spots — Best Views and Golden Hour',
      description:
        'Where and when to photograph the Baywalk sunset: golden-hour timing, the best vantage points, blue hour, and practical camera tips for the Sulu Sea promenade.',
      h1: 'Sunset & Best Photo Spots',
      lead:
        'The Baywalk’s sunsets over the Sulu Sea are its signature. Whether you shoot on a phone or a camera, a little planning gets you the best light. Here are the vantage points and timing that work.',
      updated: 'October 2026',
      sections: [
        {
          id: 'golden-hour',
          title: 'Golden Hour Timing',
          body: 'Golden hour is roughly 5:00–6:00 PM year-round, with the sun setting a bit earlier in winter and later in summer. Arrive by 4:30 PM to claim a spot and watch the sky build.',
        },
        {
          id: 'viewpoints',
          title: 'Best Vantage Points',
          body: 'The Peacock-Pheasant landmark sign is the classic frame; the open seawall gives uninterrupted sea views; the far northern end is quieter and less crowded for wide shots.',
        },
        {
          id: 'blue-hour',
          title: 'Blue Hour & City Lights',
          body: 'Just after sunset (about 6:15–6:45 PM) the sky turns deep blue and the promenade lights come on — great for long exposures and reflections on wet pavement.',
        },
        {
          id: 'low-tide',
          title: 'Low Tide Detail',
          body: 'At low tide the shore recedes and exposes mudflats and the stilted restaurants’ supports — a different, textured composition. Boat trips are best timed around high tide.',
        },
        {
          id: 'tips',
          title: 'Practical Camera Tips',
          body: 'Bring a wide lens for the panorama and a small tripod for blue hour. Keep the horizon level at the seawall, expose for the bright sky, and shoot a few brackets if your phone allows.',
        },
      ],
      faq: [
        {
          q: 'What time is the best sunset at the Baywalk?',
          a: 'About 5–6 PM for golden hour, with the actual sunset shifting a little by season. Arrive by 4:30 PM to get a good spot.',
        },
        {
          q: 'Where is the best place to take photos?',
          a: 'The Peacock-Pheasant sign for the iconic shot, the open seawall for clean sea views, and the far north end for quiet wide angles.',
        },
        {
          q: 'Is a tripod allowed at the Baywalk?',
          a: 'Yes, it is a public promenade. A small tripod helps for blue-hour long exposures, but keep walkways clear for other visitors.',
        },
        {
          q: 'Does low tide affect photos?',
          a: 'Yes — low tide exposes mudflats and stilt supports for a different look, while high tide fills the bay to the seawall and gives the fullest reflection.',
        },
      ],
      related: ['tides-weather', 'things-to-do', 'restaurants'],
    },
    fil: {
      title: 'Sunset at Photo Spots sa Baywalk — Pinakamagandang View at Golden Hour',
      description:
        'Saan at kailan kumuha ng sunset photo sa Baywalk: golden-hour timing, pinakamagandang viewpoint, blue hour, at praktikal na camera tips para sa Sulu Sea promenade.',
      h1: 'Sunset at Pinakamagandang Photo Spots',
      lead:
        'Ang sunset sa Baywalk sa Sulu Sea ay signature nito. Mula sa phone o camera, ang kaunting plano ay nakakakuha ng pinakamagandang ilaw. Narito ang mga viewpoint at timing na gumagana.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'golden-hour',
          title: 'Golden Hour Timing',
          body: 'Ang golden hour ay humigit-kumulang 5:00–6:00 PM buong taon, medyo maaga sa winter at huli sa summer. Dumating bago mag-4:30 PM para kumuha ng spot at panoorin ang langit.',
        },
        {
          id: 'viewpoints',
          title: 'Pinakamagandang Viewpoint',
          body: 'Ang Peacock-Pheasant landmark sign ay classic frame; ang bukas na seawall ay walang hadlang na sea view; ang dulong hilaga ay mas tahimik at hindi matao para sa wide shot.',
        },
        {
          id: 'blue-hour',
          title: 'Blue Hour at Mga Ilaw ng Lungsod',
          body: 'Tuwing pagkatapos ng sunset (humigit-kumulang 6:15–6:45 PM) ang langit ay nagiging malalim na asul at umiilaw ang promenade — maganda para sa long exposure at reflection sa basang pavement.',
        },
        {
          id: 'low-tide',
          title: 'Detalye ng Low Tide',
          body: 'Sa low tide, humihiwalay ang shore at lumalabas ang mudflat at suporta ng mga nakatayong restaurant — ibang, textured na composition. Ang boat trip ay pinakamainam sa high tide.',
        },
        {
          id: 'tips',
          title: 'Praktikal na Camera Tips',
          body: 'Magdala ng wide lens para sa panorama at maliit na tripod para sa blue hour. Panatilihing level ang horizon sa seawall, i-expose sa bright na langit, at mag-shoot ng bracket kung kaya ng phone.',
        },
      ],
      faq: [
        {
          q: 'Anong oras ang pinakamagandang sunset sa Baywalk?',
          a: 'Humigit-kumulang 5–6 PM para sa golden hour, na bahagyang gumagalaw ayon sa season. Dumating bago mag-4:30 PM para sa magandang spot.',
        },
        {
          q: 'Saan ang pinakamagandang pagkuha ng photo?',
          a: 'Ang Peacock-Pheasant sign para sa iconic shot, ang bukas na seawall para sa linaw na sea view, at ang dulong hilaga para sa tahimik na wide angle.',
        },
        {
          q: 'Pwede ba ang tripod sa Baywalk?',
          a: 'Oo, ito ay pampublikong promenade. Ang maliit na tripod ay nakakatulong sa blue-hour long exposure, ngunit panatilihing malinis ang walkway.',
        },
        {
          q: 'Nakakaapekto ba ang low tide sa photo?',
          a: 'Oo — ang low tide ay naglalantad ng mudflat at stilt support para sa ibang look, habang ang high tide ay pinupuno ang bay hanggang seawall at nagbibigay ng pinakapuno na reflection.',
        },
      ],
      related: ['tides-weather', 'things-to-do', 'restaurants'],
    },
    zh: {
      title: '海湾步道日落与拍照点 — 最佳视角与黄金时刻',
      description: '海湾步道日落与拍照的地点与时间：黄金时刻、最佳机位、蓝调时刻，以及苏禄海长廊的实用拍摄技巧。',
      h1: '日落与最佳拍照点',
      lead: '海湾步道最出圈的便是苏禄海上的日落。无论手机还是相机，稍作规划就能拍到最好的光。下面是可用的机位与时间。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'golden-hour',
          title: '黄金时刻的时间',
          body: '全年黄金时刻约在 17:00–18:00，冬季略早、夏季略晚。建议 16:30 前到达占好位置，看天空渐变。',
        },
        {
          id: 'viewpoints',
          title: '最佳机位',
          body: '孔雀雉地标牌是经典构图；开阔的海堤能拍到无遮挡的海景；最北端更安静、人少，适合广角大场景。',
        },
        {
          id: 'blue-hour',
          title: '蓝调时刻与城市灯光',
          body: '日落后约 18:15–18:45，天空转深蓝、长廊亮灯——适合长曝光和湿地面的倒影。',
        },
        {
          id: 'low-tide',
          title: '退潮的细节',
          body: '退潮时岸边后退，露出泥滩和水上餐厅的支柱，是另一种有质感的构图。乘船游最好安排在高潮附近。',
        },
        {
          id: 'tips',
          title: '实用拍摄技巧',
          body: '带广角镜头拍全景，蓝调时刻用小型三脚架。海堤处保持地平线水平，以明亮天空曝光，手机允许就拍几张包围曝光。',
        },
      ],
      faq: [
        {
          q: '海湾步道日落最佳时间是几点？',
          a: '黄金时刻约 17–18 点，实际日落随季节略有变化。建议 16:30 前到，占个好位。',
        },
        {
          q: '哪里拍照最好？',
          a: '孔雀雉标志牌拍标志性画面，开阔海堤拍干净海景，最北端安静适合广角大场景。',
        },
        {
          q: '海湾步道允许用三脚架吗？',
          a: '可以，这是公共长廊。小型三脚架有助于蓝调长曝光，但别挡住通道。',
        },
        {
          q: '退潮影响拍照吗？',
          a: '会——退潮露出泥滩和支柱，风格不同；高潮水位涨到海堤，倒影最饱满。',
        },
      ],
      related: ['tides-weather', 'things-to-do', 'restaurants'],
    },
  },

  'best-time': {
    en: {
      title: 'Best Time to Visit the Baywalk — Hours, Season & Crowds',
      description:
        'When to visit Puerto Princesa Baywalk Park: the best time of day, dry vs wet season, a crowd calendar, and how long to stay.',
      h1: 'Best Time to Visit the Baywalk',
      lead:
        'The Baywalk is open daily from 2:00 PM to midnight, but it transforms through the day. The short version: go in the late afternoon and stay for sunset. Here is the fuller picture by time of day and season.',
      updated: 'October 2026',
      sections: [
        {
          id: 'time-of-day',
          title: 'Best Time of Day',
          body: 'Arrive around 4:00–4:30 PM. The promenade is calm, you claim a good sunset spot, and then the food stalls and music build toward evening. Most visitors leave by about 7 PM after dinner.',
        },
        {
          id: 'season',
          title: 'Dry vs Wet Season',
          body: 'The dry season (roughly November–May) brings the most reliable weather and clearest sunsets. The wet season (June–October) still draws crowds but afternoon showers are common — bring an umbrella.',
        },
        {
          id: 'crowds',
          title: 'Crowd Calendar',
          body: 'Weekday evenings are calmer than weekends and holidays, when the promenade and parking fill up after 5 PM. Filipino holidays and school breaks are the busiest.',
        },
        {
          id: 'duration',
          title: 'How Long to Stay',
          body: 'Plan 2–3 hours: a stroll, sunset photos, a seafood dinner, and a little music. The park itself is free, so there is no rush.',
        },
      ],
      faq: [
        {
          q: 'What are the Baywalk opening hours?',
          a: 'The waterfront is open daily from about 2:00 PM to midnight. Stalls and the liveliest atmosphere build from late afternoon onward.',
        },
        {
          q: 'What month is best to visit the Baywalk?',
          a: 'November to May (dry season) gives the most reliable sunsets and comfortable evenings. February to April are especially pleasant.',
        },
        {
          q: 'When should I avoid the Baywalk?',
          a: 'If you dislike crowds, skip weekend and holiday evenings after 5 PM, and avoid the heaviest rain days in the wet season.',
        },
        {
          q: 'Is the Baywalk worth visiting in the rainy season?',
          a: 'Yes — mornings and early afternoons are often clearer, and showers usually pass. Just bring an umbrella and check the forecast.',
        },
      ],
      related: ['tides-weather', 'itinerary', 'safety-tips'],
    },
    fil: {
      title: 'Pinakamagandang Oras sa Baywalk — Oras, Season at Crowd',
      description:
        'Kailan bisitahin ang Puerto Princesa Baywalk Park: pinakamagandang oras ng araw, dry vs wet season, crowd calendar, at gaano katagal manatili.',
      h1: 'Pinakamagandang Oras sa Baywalk',
      lead:
        'Ang Baywalk ay bukas araw-araw mula 2:00 PM hanggang hatinggabi, ngunit nagbabago ito sa buong araw. Ang maikling version: pumunta sa late afternoon at manatili para sa sunset. Narito ang mas buong larawan ayon sa oras at season.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'time-of-day',
          title: 'Pinakamagandang Oras ng Araw',
          body: 'Dumating bandang 4:00–4:30 PM. Ang promenade ay kalmado, makakakuha ka ng magandang sunset spot, at pagkatapos ay bumubuo ang food stall at musika patungo sa gabi. Karamihan ng bisita ay umaalis bandang 7 PM pagkatapos ng hapunan.',
        },
        {
          id: 'season',
          title: 'Dry vs Wet Season',
          body: 'Ang dry season (humigit-kumulang Nobyembre–Mayo) ay nagbibigay ng pinakamapagkakatiwalaang panahon at malinaw na sunset. Ang wet season (Hunyo–Oktubre) ay marami pa ring tao ngunit karaniwang may afternoon shower — magdala ng umbrella.',
        },
        {
          id: 'crowds',
          title: 'Crowd Calendar',
          body: 'Ang weekday evening ay mas kalmado kaysa weekend at holiday, nang mapuno ang promenade at paradahan pagkatapos ng 5 PM. Ang mga Filipino holiday at school break ang pinakamaraming tao.',
        },
        {
          id: 'duration',
          title: 'Gaano Katagal Manatili',
          body: 'Magplano ng 2–3 oras: isang lakad, sunset photos, seafood dinner, at kaunting musika. Libre ang park, kaya walang madaliang oras.',
        },
      ],
      faq: [
        {
          q: 'Ano ang oras ng pagbukas ng Baywalk?',
          a: 'Ang waterfront ay bukas araw-araw mula humigit-kumulang 2:00 PM hanggang hatinggabi. Ang mga stall at pinakamasiglang atmosphere ay bumubuo mula sa late afternoon.',
        },
        {
          q: 'Anong buwan ang pinakamagandang bisitahin ang Baywalk?',
          a: 'Ang Nobyembre hanggang Mayo (dry season) ay nagbibigay ng pinakamapagkakatiwalaang sunset at komportableng gabi. Ang Pebrero hanggang Abril ay lalo na kaaya-aya.',
        },
        {
          q: 'Kailan dapat iwasan ang Baywalk?',
          a: 'Kung ayaw mo ng tao, laktawan ang weekend at holiday evening pagkatapos ng 5 PM, at iwasan ang pinakamabigat na ulan sa wet season.',
        },
        {
          q: 'Sulit bang bisitahin ang Baywalk sa rainy season?',
          a: 'Oo — ang umaga at maagang hapon ay kadalasang mas malinaw, at tumatagal lang ang shower. Magdala lang ng umbrella at check ang forecast.',
        },
      ],
      related: ['tides-weather', 'itinerary', 'safety-tips'],
    },
    zh: {
      title: '海湾步道最佳游览时间 — 时段、季节与人流',
      description: '普林塞萨港海湾步道什么时候去最好：一天中最佳时段、旱季与雨季、人流日历，以及建议停留多久。',
      h1: '海湾步道最佳游览时间',
      lead: '海湾步道每天约 14:00 至午夜开放，但一天之中变化很大。一句话：傍晚到、留下来看日落。下面按一天中的时段和季节说得更全。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'time-of-day',
          title: '一天中最佳时段',
          body: '约 16:00–16:30 到。长廊很安静，能占到好日落位，随后小吃摊和音乐渐渐热闹到晚上。多数游客晚饭后约 19:00 前离开。',
        },
        {
          id: 'season',
          title: '旱季与雨季',
          body: '旱季（约 11 月至 5 月）天气最稳定、日落最干净。雨季（6 月至 10 月）仍有人气，但午后常阵雨——带把伞。',
        },
        {
          id: 'crowds',
          title: '人流日历',
          body: '工作日傍晚比周末和节假日更从容；节假日后 17:00 长廊和停车都会满。菲律宾假日和学校假期最挤。',
        },
        {
          id: 'duration',
          title: '建议停留多久',
          body: '安排 2–3 小时：散个步、拍日落、吃顿海鲜、听会儿音乐。公园免费，不用赶。',
        },
      ],
      faq: [
        {
          q: '海湾步道几点开放？',
          a: '海滨每天约 14:00 至午夜开放。小吃摊和最热闹的氛围从傍晚开始聚拢。',
        },
        {
          q: '哪个月去海湾步道最好？',
          a: '11 月至次年 5 月（旱季）日落最稳定、傍晚最舒服。2 至 4 月尤其宜人。',
        },
        {
          q: '什么时候该避开海湾步道？',
          a: '若怕人多，跳过周末和节假日后 17:00 的傍晚，也避开雨季里雨最大的几天。',
        },
        {
          q: '雨季去海湾步道值得吗？',
          a: '值得——上午和午后较早常更晴朗，阵雨一般很快过去。带伞并看预报即可。',
        },
      ],
      related: ['tides-weather', 'itinerary', 'safety-tips'],
    },
  },

  'getting-there': {
    en: {
      title: 'Getting to the Baywalk — Transport, Tricycle & Taxi from the Airport',
      description:
        'Step-by-step directions to Puerto Princesa Baywalk Park: distance from the airport, tricycle and taxi fares, and how to get there from the city center.',
      h1: 'Getting to the Baywalk',
      lead:
        'The Baywalk sits on Sandoval Street, only about 2 km from Puerto Princesa International Airport (PPS) and a short ride from the city center. Here is exactly how to reach it.',
      updated: 'October 2026',
      sections: [
        {
          id: 'from-airport',
          title: 'From the Airport (PPS)',
          body: 'The Baywalk is about 2 km from the airport. A tricycle costs roughly PHP 50–100 and takes 10–15 minutes; a taxi is a little more. Many visitors also walk if they are already staying in the city center.',
        },
        {
          id: 'by-tricycle',
          title: 'By Tricycle',
          body: 'Tricycles are the everyday ride. Flag one down and say “Baywalk” — every driver knows it. Fares typically run PHP 50–150 depending on where you start within the city.',
        },
        {
          id: 'from-center',
          title: 'From the City Center',
          body: 'If you are near the cathedral, plaza, or Rizal Avenue, a tricycle reaches the Baywalk in 5–10 minutes. It is flat, walkable distance for many city-center hotels.',
        },
        {
          id: 'landmarks',
          title: 'Landmarks on the Way',
          body: 'The route passes near the Immaculate Conception Cathedral and Plaza Cuartel. Ask the driver to drop you at the Baywalk main entrance on Sandoval Street, by the sea.',
        },
      ],
      faq: [
        {
          q: 'How far is the Baywalk from the airport?',
          a: 'About 2 km from Puerto Princesa International Airport. A tricycle takes roughly 10–15 minutes.',
        },
        {
          q: 'How much is a tricycle to the Baywalk?',
          a: 'Around PHP 50–150, depending on your starting point in the city. From the airport budget PHP 50–100.',
        },
        {
          q: 'Can I take a taxi to the Baywalk?',
          a: 'Yes — taxis and ride apps are available at the airport and around the city, and cost a bit more than a tricycle for the short trip.',
        },
        {
          q: 'Is the Baywalk walkable from the city center?',
          a: 'For many city-center hotels it is a flat, walkable distance of roughly 1–2 km; otherwise a quick tricycle gets you there.',
        },
      ],
      related: ['parking', 'nearby-attractions', 'best-time'],
    },
    fil: {
      title: 'Paano Pumunta sa Baywalk — Transport, Tricycle at Taxi mula Airport',
      description:
        'Hakbang-hakbang na direksyon sa Puerto Princesa Baywalk Park: distansya mula sa airport, tricycle at taxi fare, at paano pumunta mula sa city center.',
      h1: 'Paano Pumunta sa Baywalk',
      lead:
        'Ang Baywalk ay nasa Sandoval Street, humigit-kumulang 2 km lang mula sa Puerto Princesa International Airport (PPS) at maikling biyahe mula sa city center. Narito kung paano tamang makarating.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'from-airport',
          title: 'Mula sa Airport (PPS)',
          body: 'Ang Baywalk ay humigit-kumulang 2 km mula sa airport. Ang tricycle ay mga PHP 50–100 at tumatagal ng 10–15 minuto; ang taxi ay kaunti pang mahal. Maraming bisita ang naglalakad kung nasa city center ang lodging.',
        },
        {
          id: 'by-tricycle',
          title: 'Sa Tricycle',
          body: 'Ang tricycle ay pang-araw-araw na sakay. Huminto ng isa at sabihing “Baywalk” — alam ng lahat ng driver. Ang pamasahe ay karaniwang PHP 50–150 depende sa simula mo sa lungsod.',
        },
        {
          id: 'from-center',
          title: 'Mula sa City Center',
          body: 'Kung malapit ka sa cathedral, plaza, o Rizal Avenue, ang tricycle ay umaabot sa Baywalk sa 5–10 minuto. Ito ay patag, walkable na distansya para sa maraming city-center hotel.',
        },
        {
          id: 'landmarks',
          title: 'Mga Landmark sa Daan',
          body: 'Ang ruta ay dumadaan malapit sa Immaculate Conception Cathedral at Plaza Cuartel. Sabihin sa driver na ibaba ka sa main entrance ng Baywalk sa Sandoval Street, sa tabi ng dagat.',
        },
      ],
      faq: [
        {
          q: 'Gaano kalayo ang Baywalk mula sa airport?',
          a: 'Humigit-kumulang 2 km mula sa Puerto Princesa International Airport. Ang tricycle ay tumatagal ng humigit-kumulang 10–15 minuto.',
        },
        {
          q: 'Magkano ang tricycle papuntang Baywalk?',
          a: 'Humigit-kumulang PHP 50–150, depende sa simula mo sa lungsod. Mula sa airport, budget ng PHP 50–100.',
        },
        {
          q: 'Pwede bang mag-taxi papuntang Baywalk?',
          a: 'Oo — ang taxi at ride app ay available sa airport at paligid ng lungsod, at kaunti pang mahal kaysa tricycle para sa maikling biyahe.',
        },
        {
          q: 'Walkable ba ang Baywalk mula sa city center?',
          a: 'Para sa maraming city-center hotel ito ay patag, walkable na distansya na humigit-kumulang 1–2 km; kung hindi, isang mabilis na tricycle ang maghahatid sa iyo.',
        },
      ],
      related: ['parking', 'nearby-attractions', 'best-time'],
    },
    zh: {
      title: '怎么去海湾步道 — 交通、三轮车与机场打车',
      description: '普林塞萨港海湾步道的逐步路线：距机场多远、三轮车与出租车车费，以及如何从市中心前往。',
      h1: '怎么去海湾步道',
      lead: '海湾步道位于 Sandoval 街，距普林塞萨港国际机场（PPS）仅约 2 公里，离市中心也只一小段路。下面说清怎么到。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'from-airport',
          title: '从机场（PPS）出发',
          body: '海湾步道距机场约 2 公里。三轮车约 PHP 50–100，10–15 分钟；出租车稍贵。若住在市中心，也有人步行前往。',
        },
        {
          id: 'by-tricycle',
          title: '乘三轮车',
          body: '三轮车是最常见的代步。招一辆说“Baywalk”即可，司机都认得。车费视在城里起点而定，通常 PHP 50–150。',
        },
        {
          id: 'from-center',
          title: '从市中心出发',
          body: '若在大教堂、广场或 Rizal 大街附近，三轮车 5–10 分钟到海湾步道。地势平坦，市中心许多酒店步行可达。',
        },
        {
          id: 'landmarks',
          title: '沿途地标',
          body: '路线会经过圣母无原罪主教座堂和 Cuartel 广场。让司机把你放在 Sandoval 街临海的海湾步道正门。',
        },
      ],
      faq: [
        {
          q: '海湾步道离机场多远？',
          a: '距普林塞萨港国际机场约 2 公里。三轮车约 10–15 分钟。',
        },
        {
          q: '去海湾步道三轮车多少钱？',
          a: '约 PHP 50–150，取决于城里起点。从机场预算 PHP 50–100。',
        },
        {
          q: '能打车去海湾步道吗？',
          a: '可以——机场和市区都有出租车和网约车，短途比三轮车稍贵。',
        },
        {
          q: '海湾步道从市中心能步行到吗？',
          a: '对许多市中心酒店来说，约 1–2 公里、地势平坦，可步行；否则坐辆三轮车很快到。',
        },
      ],
      related: ['parking', 'nearby-attractions', 'best-time'],
    },
  },

  parking: {
    en: {
      title: 'Parking at the Baywalk — Free Street Parking & Tips',
      description:
        'Where to park at Puerto Princesa Baywalk Park: free street parking along Sandoval Street, motorcycle and bicycle bays, tricycle drop-off, and peak-hour tips.',
      h1: 'Parking at the Baywalk',
      lead:
        'Good news for drivers: parking around the Baywalk is free. Spaces line Sandoval Street and the adjacent roads, with dedicated bays for motorcycles and bicycles. Here is how to park with the least hassle.',
      updated: 'October 2026',
      sections: [
        {
          id: 'street',
          title: 'Free Street Parking',
          body: 'Street parking along Sandoval Street and nearby roads is free and on a first-come basis. Car spaces line both sides of Sandoval; arrive before 4:30 PM for the best choice.',
        },
        {
          id: 'motorcycle',
          title: 'Motorcycles & Bicycles',
          body: 'There is ample space for 50+ motorcycles in designated bays, plus bicycle racks next to the promenade. Two-wheelers are the easiest way to park close during busy evenings.',
        },
        {
          id: 'tricycle',
          title: 'Tricycle Drop-off',
          body: 'Tricycles can drop you right at the Baywalk main entrance by the sea. If you are being driven, this avoids parking entirely and is ideal at peak sunset hours.',
        },
        {
          id: 'tips',
          title: 'Peak-Hour Tips',
          body: 'Weekends and holidays fill up after 5 PM. The far northern end often has more spaces, and arriving early is the simplest way to park near the action.',
        },
      ],
      faq: [
        {
          q: 'Is parking free at the Baywalk?',
          a: 'Yes — street parking along Sandoval Street and nearby roads is free, on a first-come basis.',
        },
        {
          q: 'Is Baywalk parking safe?',
          a: 'The area is well-lit and regularly patrolled. Still, do not leave valuables in plain sight in your vehicle.',
        },
        {
          q: 'Where should I park for the Baywalk?',
          a: 'Along Sandoval Street for cars, in the designated motorcycle bays for bikes, or use a tricycle drop-off at the main entrance.',
        },
        {
          q: 'Does parking get crowded?',
          a: 'Yes, on weekends and holidays after 5 PM. Arrive before 4:30 PM or try the quieter far northern end.',
        },
      ],
      related: ['getting-there', 'best-time', 'safety-tips'],
    },
    fil: {
      title: 'Paradahan sa Baywalk — Libreng Street Parking at Tips',
      description:
        'Saan mag-park sa Puerto Princesa Baywalk Park: libreng street parking sa Sandoval Street, motorcycle at bicycle bay, tricycle drop-off, at peak-hour tips.',
      h1: 'Paradahan sa Baywalk',
      lead:
        'Magandang balita para sa mga drayber: ang paradahan sa paligid ng Baywalk ay libre. Ang mga puwesto ay naka-line sa Sandoval Street at mga katabing kalsada, may dedicated na bay para sa motorcycle at bicycle. Narito kung paano mag-park nang walang gulo.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'street',
          title: 'Libreng Street Parking',
          body: 'Ang street parking sa Sandoval Street at mga katabing kalsada ay libre at first-come basis. Ang car space ay naka-line sa magkabilang gilid ng Sandoval; dumating bago mag-4:30 PM para sa pinakamagandang pagpipilian.',
        },
        {
          id: 'motorcycle',
          title: 'Mga Motorsiklo at Bisikleta',
          body: 'May sapat na espasyo para sa 50+ motorsiklo sa designated bay, plus bicycle rack sa tabi ng promenade. Ang two-wheeler ay pinakamadaling paraan para mag-park malapit sa maabalang gabi.',
        },
        {
          id: 'tricycle',
          title: 'Tricycle Drop-off',
          body: 'Ang tricycle ay maaaring maghatid diretso sa main entrance ng Baywalk sa tabi ng dagat. Kung isinasakay ka, ito ay nakaiwas sa paradahan at perpekto sa peak sunset hour.',
        },
        {
          id: 'tips',
          title: 'Peak-Hour Tips',
          body: 'Ang weekend at holiday ay napupuno pagkatapos ng 5 PM. Ang dulong hilaga ay madalas na may mas maraming puwesto, at ang maagang pagdating ay pinakasimpleng paraan para mag-park malapit sa action.',
        },
      ],
      faq: [
        {
          q: 'Libre ba ang paradahan sa Baywalk?',
          a: 'Oo — ang street parking sa Sandoval Street at mga katabing kalsada ay libre, sa first-come basis.',
        },
        {
          q: 'Ligtas ba ang paradahan sa Baywalk?',
          a: 'Ang lugar ay maliwanag at regular na binabantayan. Gayunpaman, huwag iwan ang mga mahahalaga sa kita ng sasakyan.',
        },
        {
          q: 'Saan dapat mag-park para sa Baywalk?',
          a: 'Sa Sandoval Street para sa kotse, sa designated motorcycle bay para sa bike, o gumamit ng tricycle drop-off sa main entrance.',
        },
        {
          q: 'Napupuno ba ang paradahan?',
          a: 'Oo, sa weekend at holiday pagkatapos ng 5 PM. Dumating bago mag-4:30 PM o subukan ang tahimik na dulong hilaga.',
        },
      ],
      related: ['getting-there', 'best-time', 'safety-tips'],
    },
    zh: {
      title: '海湾步道停车 — 免费路边停车与提示',
      description: '普林塞萨港海湾步道停哪里：Sandoval 街免费路边停车、摩托车与自行车位、三轮车下客点，以及高峰时段提示。',
      h1: '海湾步道停车',
      lead: '对开车的人是个好消息：海湾步道周边停车免费。Sandoval 街和邻近道路沿线都有车位，还有专门的摩托车和自行车位。下面是怎么停最省事。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'street',
          title: '免费路边停车',
          body: 'Sandoval 街及附近道路的路边停车免费、先到先得。汽车位沿 Sandoval 街两侧排开；想在最佳位置，请于 16:30 前到达。',
        },
        {
          id: 'motorcycle',
          title: '摩托车与自行车',
          body: '指定车位可停 50 辆以上摩托车，长廊边还有自行车架。繁忙傍晚，两轮车最容易停得近。',
        },
        {
          id: 'tricycle',
          title: '三轮车下客',
          body: '三轮车可直接送到临海的海湾步道正门。若有人载你，就完全不必停车，落日高峰最合适。',
        },
        {
          id: 'tips',
          title: '高峰时段提示',
          body: '周末和节假日 17:00 后满位。最北端常更有空位，早到是停得靠近活动区最简单的办法。',
        },
      ],
      faq: [
        {
          q: '海湾步道停车免费吗？',
          a: '免费——Sandoval 街及附近道路的路边停车免费、先到先得。',
        },
        {
          q: '海湾步道停车安全吗？',
          a: '该区域照明良好、有定期巡逻。但仍请勿在车里显眼处留贵重物品。',
        },
        {
          q: '海湾步道该停哪里？',
          a: '汽车停 Sandoval 街，摩托车停指定车位，或三轮车在正门下客。',
        },
        {
          q: '停车会满吗？',
          a: '会，周末和节假日 17:00 后满位。请于 16:30 前到，或试试更安静的最北端。',
        },
      ],
      related: ['getting-there', 'best-time', 'safety-tips'],
    },
  },

  'nearby-attractions': {
    en: {
      title: 'Nearby Attractions — What to See Around the Baywalk in Puerto Princesa',
      description:
        'Attractions near the Baywalk: the Immaculate Conception Cathedral, Plaza Cuartel, Palawan Museum, Honda Bay island hopping, and the Underground River day trip.',
      h1: 'Nearby Attractions in Puerto Princesa',
      lead:
        'The Baywalk is in the heart of Puerto Princesa, within a short ride of the city’s other highlights. If you have a full day, here are the places worth combining with your Baywalk evening.',
      updated: 'October 2026',
      sections: [
        {
          id: 'cathedral',
          title: 'Immaculate Conception Cathedral',
          body: 'The city’s landmark cathedral is a short tricycle ride from the Baywalk. Its blue-and-white facade is a popular photo stop and a calm place to visit by day.',
        },
        {
          id: 'plaza-cuartel',
          title: 'Plaza Cuartel',
          body: 'A small historical park near the cathedral with wartime ruins and shaded gardens — an easy, quiet add-on walk from the city center.',
        },
        {
          id: 'museum',
          title: 'Palawan Museum',
          body: 'A modest museum on the city’s history and culture, good for context before or after a Baywalk stroll. Check current opening hours before you go.',
        },
        {
          id: 'honda-bay',
          title: 'Honda Bay Island Hopping',
          body: 'About 30–45 minutes from the city, Honda Bay offers island hopping, snorkeling, and sandbars. It is a daytime trip; return to the Baywalk for sunset.',
        },
        {
          id: 'underground-river',
          title: 'Puerto Princesa Underground River',
          body: 'A UNESCO World Heritage Site roughly 80 km away. It is a full-day trip best booked in advance, often combined with an evening back in the city.',
        },
      ],
      faq: [
        {
          q: 'What is the closest attraction to the Baywalk?',
          a: 'The Immaculate Conception Cathedral and Plaza Cuartel are the closest, just a short tricycle ride from the waterfront.',
        },
        {
          q: 'How far is the Underground River from the Baywalk?',
          a: 'About 80 km, a full-day trip. It is best booked ahead and often paired with an evening in the city afterward.',
        },
        {
          q: 'Can I do Honda Bay and the Baywalk in one day?',
          a: 'Yes — Honda Bay is a morning-to-afternoon island trip, leaving the evening free for the Baywalk sunset and dinner.',
        },
        {
          q: 'Are these nearby attractions free?',
          a: 'The cathedral and Plaza Cuartel are free to visit; the museum, Honda Bay, and Underground River involve separate fees and bookings.',
        },
      ],
      related: ['getting-there', 'itinerary', 'best-time'],
    },
    fil: {
      title: 'Mga Kalapit na Atraksyon — Ano ang Puntahan sa Paligid ng Baywalk sa Puerto Princesa',
      description:
        'Mga atraksyon malapit sa Baywalk: Immaculate Conception Cathedral, Plaza Cuartel, Palawan Museum, Honda Bay island hopping, at Underground River day trip.',
      h1: 'Mga Kalapit na Atraksyon sa Puerto Princesa',
      lead:
        'Ang Baywalk ay nasa puso ng Puerto Princesa, maikling biyahe mula sa iba pang highlight ng lungsod. Kung may buong araw ka, narito ang mga lugar na sulit pagsamahin sa iyong Baywalk evening.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'cathedral',
          title: 'Immaculate Conception Cathedral',
          body: 'Ang landmark cathedral ng lungsod ay maikling tricycle ride mula sa Baywalk. Ang blue-and-white facade nito ay sikat na photo stop at tahimik na lugar bisitahin sa araw.',
        },
        {
          id: 'plaza-cuartel',
          title: 'Plaza Cuartel',
          body: 'Isang maliit na historical park malapit sa cathedral na may wartime ruins at shaded garden — isang madaling, tahimik na add-on walk mula sa city center.',
        },
        {
          id: 'museum',
          title: 'Palawan Museum',
          body: 'Isang modest na museum sa kasaysayan at kultura ng lungsod, mabuti para sa context bago o pagkatapos ng Baywalk stroll. I-check ang current opening hours bago pumunta.',
        },
        {
          id: 'honda-bay',
          title: 'Honda Bay Island Hopping',
          body: 'Humigit-kumulang 30–45 minuto mula sa lungsod, ang Honda Bay ay nag-aalok ng island hopping, snorkeling, at sandbar. Ito ay daytime trip; bumalik sa Baywalk para sa sunset.',
        },
        {
          id: 'underground-river',
          title: 'Puerto Princesa Underground River',
          body: 'Isang UNESCO World Heritage Site na humigit-kumulang 80 km ang layo. Ito ay full-day trip na pinakamainam i-book nang maaga, kadalasang sinasama ang gabi sa lungsod.',
        },
      ],
      faq: [
        {
          q: 'Ano ang pinakamalapit na atraksyon sa Baywalk?',
          a: 'Ang Immaculate Conception Cathedral at Plaza Cuartel ang pinakamalapit, maikling tricycle ride mula sa waterfront.',
        },
        {
          q: 'Gaano kalayo ang Underground River mula sa Baywalk?',
          a: 'Humigit-kumulang 80 km, isang full-day trip. Pinakamainam i-book nang maaga at kadalasang isinasama ang gabi sa lungsod.',
        },
        {
          q: 'Pwede bang Honda Bay at Baywalk sa isang araw?',
          a: 'Oo — ang Honda Bay ay morning-to-afternoon island trip, na nag-iiwan ng gabi para sa Baywalk sunset at dinner.',
        },
        {
          q: 'Libre ba ang mga kalapit na atraksyon na ito?',
          a: 'Ang cathedral at Plaza Cuartel ay libre bisitahin; ang museum, Honda Bay, at Underground River ay may hiwalay na fee at booking.',
        },
      ],
      related: ['getting-there', 'itinerary', 'best-time'],
    },
    zh: {
      title: '周边景点 — 海湾步道附近普林塞萨港还有什么可看',
      description: '海湾步道周边景点：圣母无原罪主教座堂、Cuartel 广场、巴拉望博物馆、本田湾跳岛，以及地下河一日游。',
      h1: '普林塞萨港周边景点',
      lead: '海湾步道位于普林塞萨港市中心，短途车程即可到城里其他亮点。若有一整天，下面这些地方值得和海湾步道之夜组合起来。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'cathedral',
          title: '圣母无原罪主教座堂',
          body: '这座城市地标座堂距海湾步道仅一小段三轮车路程。蓝白外墙是热门拍照点，白天也是安静的去处。',
        },
        {
          id: 'plaza-cuartel',
          title: 'Cuartel 广场',
          body: '座堂旁的小型历史公园，有战时遗迹和遮荫花园——从市中心顺路散步就能轻松加上这一站。',
        },
        {
          id: 'museum',
          title: '巴拉望博物馆',
          body: '一座不大的博物馆，讲城市历史文化，海湾步道散步前后都适合来看看。出发前请核对当前开放时间。',
        },
        {
          id: 'honda-bay',
          title: '本田湾跳岛',
          body: '距市区约 30–45 分钟，本田湾可跳岛、浮潜和看沙洲。属于白天行程；傍晚回海湾步道看日落。',
        },
        {
          id: 'underground-river',
          title: '普林塞萨港地下河',
          body: '联合国教科文组织世界遗产，距约 80 公里。需一整天，最好提前预订，常和当晚回城搭配。',
        },
      ],
      faq: [
        {
          q: '海湾步道最近的景点是哪个？',
          a: '圣母无原罪主教座堂和 Cuartel 广场最近，从海滨坐三轮车一小段即到。',
        },
        {
          q: '地下河离海湾步道多远？',
          a: '约 80 公里，是一日游。最好提前预订，之后常搭配回城过夜。',
        },
        {
          q: '本田湾和海湾步道能在一天内安排吗？',
          a: '可以——本田湾是上午到下午的跳岛行程，傍晚正好留给海湾步道日落和晚餐。',
        },
        {
          q: '这些周边景点免费吗？',
          a: '座堂和 Cuartel 广场免费；博物馆、本田湾和地下河需另付费用并预订。',
        },
      ],
      related: ['getting-there', 'itinerary', 'best-time'],
    },
  },

  itinerary: {
    en: {
      title: 'Baywalk Itineraries & Plans — Half-Day, Full-Day & by Traveler Type',
      description:
        'Ready-made Baywalk plans: a half-day evening (about 4–7 PM), a full-day Puerto Princesa route, and tailored plans for families, photographers, and easy-paced visitors.',
      h1: 'Baywalk Itineraries & Plans',
      lead:
        'Most visitors pair the Baywalk with a relaxed evening, but it also fits into a full Puerto Princesa day. Here are practical plans you can follow, with a few tailored to how you like to travel.',
      updated: 'October 2026',
      sections: [
        {
          id: 'half-day',
          title: 'Half-Day Evening (about 4:00–7:00 PM)',
          body: 'Arrive around 4 PM and claim a sunset spot, stroll the promenade end to end, watch the sunset at the main viewing area, have a seafood dinner at a stall or waterfront restaurant, then enjoy ice cream and live music before heading back.',
        },
        {
          id: 'full-day',
          title: 'Full-Day Puerto Princesa (9:00 AM–8:00 PM)',
          body: 'Morning: cathedral and Plaza Cuartel. Midday: Palawan Museum and a local lunch. Afternoon: rest, then return to the Baywalk by 4 PM. Sunset, dinner, and music at the Baywalk; optional night market or city stroll afterward.',
        },
        {
          id: 'family',
          title: 'Plan for Families',
          body: 'Come early (about 4 PM) to beat the heat and crowds. The flat, stroller-friendly promenade, benches, open space, and kid-friendly snacks make it easy. Keep children within arm’s reach near the water at low tide.',
        },
        {
          id: 'photo',
          title: 'Plan for Photographers',
          body: 'Scout the Peacock-Pheasant sign before golden hour, shoot golden hour about 5–6 PM, use low tide for mudflat detail, then catch blue hour just after sunset. Bring a wide lens and a small tripod.',
        },
      ],
      faq: [
        {
          q: 'Is a half-day at the Baywalk enough?',
          a: 'For most visitors, a 3-hour evening (about 4–7 PM) covers the walk, sunset, dinner, and music comfortably.',
        },
        {
          q: 'Can I combine the Baywalk with a full-day plan?',
          a: 'Yes — do the cathedral, plaza, and museum in the morning, rest at midday, then return by 4 PM for sunset and dinner.',
        },
        {
          q: 'What is the best Baywalk plan with kids?',
          a: 'Arrive around 4 PM, use the flat stroller-friendly path and benches, and keep little ones close to the water at low tide.',
        },
        {
          q: 'What is the best plan for sunset photos?',
          a: 'Arrive by 4:30 PM, shoot golden hour 5–6 PM at the sign or seawall, then blue hour after sunset with a tripod.',
        },
      ],
      related: ['best-time', 'sunset-photos', 'things-to-do'],
    },
    fil: {
      title: 'Mga Itinerary at Plan sa Baywalk — Half-Day, Full-Day at by Traveler Type',
      description:
        'Handa nang plan sa Baywalk: half-day evening (humigit-kumulang 4–7 PM), full-day Puerto Princesa route, at tailored plan para sa pamilya, photographer, at easy-paced na bisita.',
      h1: 'Mga Itinerary at Plan sa Baywalk',
      lead:
        'Karamihan ng bisita ay pinagsasama ang Baywalk sa relaxed na gabi, ngunit bagay din ito sa buong araw sa Puerto Princesa. Narito ang praktikal na plan na masusunod, may ilang tailored sa kung paano ka mag-travel.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'half-day',
          title: 'Half-Day na Gabi (humigit-kumulang 4:00–7:00 PM)',
          body: 'Dumating bandang 4 PM at kumuha ng sunset spot, lakarin ang promenade mula dulo hanggang dulo, panoorin ang sunset sa main viewing area, kumain ng seafood dinner sa stall o waterfront restaurant, pagkatapos ay enjoy sa ice cream at live music bago umuwi.',
        },
        {
          id: 'full-day',
          title: 'Full-Day na Puerto Princesa (9:00 AM–8:00 PM)',
          body: 'Umaga: cathedral at Plaza Cuartel. Tanghali: Palawan Museum at lokal na tanghalian. Hapon: magpahinga, bumalik sa Baywalk bandang 4 PM. Sunset, dinner, at musika sa Baywalk; optional na night market o city stroll pagkatapos.',
        },
        {
          id: 'family',
          title: 'Plan para sa Pamilya',
          body: 'Dumating nang maaga (bandang 4 PM) para iwas init at tao. Ang patag, stroller-friendly na promenade, bench, bukas na espasyo, at kid-friendly na snack ay nagpapadali. Panatilihing malapit ang mga bata sa tubig sa low tide.',
        },
        {
          id: 'photo',
          title: 'Plan para sa Photographer',
          body: 'I-scout ang Peacock-Pheasant sign bago ang golden hour, i-shoot ang golden hour bandang 5–6 PM, gamitin ang low tide para sa mudflat detail, pagkatapos ay blue hour pagkatapos ng sunset. Magdala ng wide lens at maliit na tripod.',
        },
      ],
      faq: [
        {
          q: 'Sapat ba ang half-day sa Baywalk?',
          a: 'Para sa karamihan ng bisita, ang 3-oras na gabi (humigit-kumulang 4–7 PM) ay sumasakop sa lakad, sunset, dinner, at musika nang komportable.',
        },
        {
          q: 'Pwede bang pagsamahin ang Baywalk sa full-day plan?',
          a: 'Oo — gawin ang cathedral, plaza, at museum sa umaga, magpahinga sa tanghali, bumalik bandang 4 PM para sa sunset at dinner.',
        },
        {
          q: 'Ano ang pinakamagandang Baywalk plan kasama ang kids?',
          a: 'Dumating bandang 4 PM, gamitin ang patag na stroller-friendly path at bench, at panatilihing malapit ang mga bata sa tubig sa low tide.',
        },
        {
          q: 'Ano ang pinakamagandang plan para sa sunset photo?',
          a: 'Dumating bago mag-4:30 PM, i-shoot ang golden hour 5–6 PM sa sign o seawall, pagkatapos ay blue hour pagkatapos ng sunset gamit ang tripod.',
        },
      ],
      related: ['best-time', 'sunset-photos', 'things-to-do'],
    },
    zh: {
      title: '海湾步道行程与计划 — 半日、全日及按游客类型',
      description: '现成的海湾步道计划：半日傍晚（约 16–19 点）、普林塞萨港全日路线，以及亲子、摄影和慢节奏游客的专属计划。',
      h1: '海湾步道行程与计划',
      lead: '多数游客把海湾步道安排成轻松的夜晚，但它也能放进普林塞萨港的一整天。下面是可照着走的实用计划，还有按旅行偏好定制的几种。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'half-day',
          title: '半日傍晚（约 16:00–19:00）',
          body: '约 16 点到，占好日落位；从头走到尾逛长廊；在主观景点看日落；在摊位或海滨餐厅吃顿海鲜；再吃个冰淇淋、听会儿音乐后返回。',
        },
        {
          id: 'full-day',
          title: '普林塞萨港全日（9:00–20:00）',
          body: '上午：座堂与 Cuartel 广场。中午：巴拉望博物馆加一顿当地午餐。下午：休息，17 点前回到海湾步道。日落、晚餐、音乐；之后可选夜市或城市散步。',
        },
        {
          id: 'family',
          title: '亲子计划',
          body: '早点到（约 16 点）避开炎热和人潮。平整、可推婴儿车的步道、长椅、开阔空间和适合孩子的零食都很方便。退潮时看紧靠近水边的孩子。',
        },
        {
          id: 'photo',
          title: '摄影计划',
          body: '黄金时刻前先踩点孔雀雉标志牌；17–18 点拍黄金时刻；用退潮拍泥滩细节；日落后拍蓝调时刻。带广角镜头和小型三脚架。',
        },
      ],
      faq: [
        {
          q: '海湾步道半日够吗？',
          a: '对多数游客，3 小时傍晚（约 16–19 点）已从容覆盖散步、日落、晚餐和音乐。',
        },
        {
          q: '海湾步道能和全日计划结合吗？',
          a: '可以——上午看座堂、广场和博物馆，中午休息，17 点前回海湾步道看日落吃晚餐。',
        },
        {
          q: '带娃去海湾步道最佳计划？',
          a: '约 16 点到，用平整可推车的步道和长椅，退潮时让孩子远离水边。',
        },
        {
          q: '拍日落的最佳计划？',
          a: '16:30 前到，17–18 点在标志牌或海堤拍黄金时刻，日落后用三脚架拍蓝调时刻。',
        },
      ],
      related: ['best-time', 'sunset-photos', 'things-to-do'],
    },
  },

  'safety-tips': {
    en: {
      title: 'Safety & Visitor Tips for the Baywalk — What to Know Before You Go',
      description:
        'Practical Baywalk safety tips: general security, cash and valuables, family and pet advice, and health notes for the Palawan evening climate.',
      h1: 'Safety & Visitor Tips',
      lead:
        'The Baywalk is generally safe and family-friendly, with regular patrols and good lighting. A few simple habits keep your visit smooth. Here is what to know before you go.',
      updated: 'October 2026',
      sections: [
        {
          id: 'general',
          title: 'General Safety',
          body: 'Stick to well-lit, populated areas and stay aware of your surroundings. The promenade is patrolled and lit at night, but avoid displaying large amounts of cash or obvious jewelry.',
        },
        {
          id: 'money',
          title: 'Cash & Valuables',
          body: 'Bring enough cash for food and transport — cards are not widely accepted at stalls. Keep wallets and phones secure in crowded moments, especially near the music and food clusters.',
        },
        {
          id: 'family-pet',
          title: 'Families & Pets',
          body: 'The space is family-friendly and suitable for all ages; pets are welcome but should be leashed. Emergency contact numbers are posted on the information board near the main entrance.',
        },
        {
          id: 'health',
          title: 'Health & Climate',
          body: 'Evenings are warm and humid. Bring water, use sunscreen earlier in the day, and wear light clothing. The promenade is wheelchair accessible and step-free along the water.',
        },
      ],
      faq: [
        {
          q: 'Is the Baywalk safe at night?',
          a: 'Yes — it is well-lit, regularly patrolled, and popular with families in the evening. Use normal big-city caution with valuables.',
        },
        {
          q: 'Should I bring cash to the Baywalk?',
          a: 'Yes. Most stalls and small eateries are cash-only, so bring enough for food, snacks, and tricycle fares.',
        },
        {
          q: 'Is the Baywalk family-friendly?',
          a: 'Very. The flat, open promenade, benches, and kid-friendly food make it easy with children, and pets on a leash are welcome.',
        },
        {
          q: 'Is the Baywalk wheelchair accessible?',
          a: 'Yes — the waterfront promenade is paved and step-free, with rest spots and benches along the way.',
        },
      ],
      related: ['best-time', 'getting-there', 'parking'],
    },
    fil: {
      title: 'Safety at Visitor Tips para sa Baywalk — Ano ang Dapat Malaman Bago Pumunta',
      description:
        'Praktikal na Baywalk safety tips: general security, cash at valuables, payo para sa pamilya at pet, at health notes para sa Palawan evening climate.',
      h1: 'Safety at Visitor Tips',
      lead:
        'Ang Baywalk ay karaniwang ligtas at family-friendly, may regular na patrol at magandang ilaw. Ilang simpleng gawi ang nagpapanatiling maayos ang iyong bisita. Narito ang dapat malaman bago pumunta.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'general',
          title: 'General Safety',
          body: 'Manatili sa well-lit, populated na lugar at maging aware sa paligid. Ang promenade ay binabantayan at may ilaw sa gabi, ngunit iwasang ipakita ang malaking halaga ng cash o halatang alahas.',
        },
        {
          id: 'money',
          title: 'Cash at Valuables',
          body: 'Magdala ng sapat na cash para sa pagkain at transport — ang card ay hindi karaniwang tinatanggap sa stall. Panatilihing secure ang wallet at phone sa crowd, lalo na malapit sa music at food cluster.',
        },
        {
          id: 'family-pet',
          title: 'Pamilya at Pet',
          body: 'Ang espasyo ay family-friendly at bagay sa lahat ng edad; ang mga alagang hayop ay welcome ngunit dapat nakatali. Ang emergency contact number ay nakapaskil sa information board malapit sa main entrance.',
        },
        {
          id: 'health',
          title: 'Health at Climate',
          body: 'Ang gabi ay mainit at humid. Magdala ng tubig, gumamit ng sunscreen sa maagang araw, at magsuot ng magaang damit. Ang promenade ay wheelchair accessible at step-free sa tabi ng tubig.',
        },
      ],
      faq: [
        {
          q: 'Ligtas ba ang Baywalk sa gabi?',
          a: 'Oo — ito ay well-lit, regular na binabantayan, at sikat sa pamilya sa gabi. Gamitin ang normal na pag-iingat sa valuables.',
        },
        {
          q: 'Dapat bang magdala ng cash sa Baywalk?',
          a: 'Oo. Ang karamihan sa stall at maliit na eatery ay cash-only, kaya magdala ng sapat para sa pagkain, snacks, at tricycle fare.',
        },
        {
          q: 'Family-friendly ba ang Baywalk?',
          a: 'Oo. Ang patag, bukas na promenade, bench, at kid-friendly na pagkain ay nagpapadali sa mga bata, at welcome ang pet na nakatali.',
        },
        {
          q: 'Wheelchair accessible ba ang Baywalk?',
          a: 'Oo — ang waterfront promenade ay paved at step-free, may rest spot at bench sa buong daan.',
        },
      ],
      related: ['best-time', 'getting-there', 'parking'],
    },
    zh: {
      title: '海湾步道安全与游玩提示 — 出发前要知道的事',
      description: '实用的海湾步道安全提示：一般治安、现金与贵重物品、亲子与宠物建议，以及巴拉望傍晚气候的健康提醒。',
      h1: '海湾步道安全与游玩提示',
      lead: '海湾步道总体安全、适合家庭，有定期巡逻和良好照明。几个简单习惯就能让行程顺畅。下面出发前要知道的事。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'general',
          title: '一般安全',
          body: '待在照明好、有人气的区域，留意周围环境。长廊夜间有照明和巡逻，但别显露大量现金或显眼首饰。',
        },
        {
          id: 'money',
          title: '现金与贵重物品',
          body: '带够吃饭和交通的现金——摊位普遍不收卡。人多时看好钱包和手机，尤其在音乐和美食聚集处。',
        },
        {
          id: 'family-pet',
          title: '亲子与宠物',
          body: '这里适合家庭、各年龄都合适；宠物欢迎但须系绳。紧急联系电话贴在正门附近的信息牌上。',
        },
        {
          id: 'health',
          title: '健康与气候',
          body: '傍晚温暖潮湿。带水、白天早些涂防晒、穿轻薄衣物。海滨长廊平整无障碍，沿途有休息点和长椅。',
        },
      ],
      faq: [
        {
          q: '海湾步道晚上安全吗？',
          a: '安全——照明良好、有定期巡逻，傍晚很多家庭来。贵重物品照一般大城市习惯保管即可。',
        },
        {
          q: '去海湾步道要带现金吗？',
          a: '要。多数摊位和小店只收现金，带够吃饭、零食和三车轮费。',
        },
        {
          q: '海湾步道适合亲子吗？',
          a: '非常适合。平整开阔的长廊、长椅和适合孩子的食物让带娃很轻松，系绳宠物也欢迎。',
        },
        {
          q: '海湾步道有无障碍通道吗？',
          a: '有——海滨长廊平整无台阶，沿途设有休息点和长椅。',
        },
      ],
      related: ['best-time', 'getting-there', 'parking'],
    },
  },

  'tides-weather': {
    en: {
      title: 'Tides & Weather at the Baywalk — Sulu Sea Patterns and Forecast',
      description:
        'How the Sulu Sea tides and Palawan weather shape your Baywalk visit: the twice-daily tide rhythm, best tide for photos, and the dry vs wet season outlook.',
      h1: 'Tides & Weather at the Baywalk',
      lead:
        'Puerto Princesa opens onto the Sulu Sea, where tides follow a mixed semi-diurnal rhythm — two highs and two lows a day, with a modest range of about 0.5–2 meters. Here is how the water and weather affect your visit.',
      updated: 'October 2026',
      sections: [
        {
          id: 'rhythm',
          title: 'The Daily Tide Rhythm',
          body: 'Expect two high tides and two low tides every day. Times drift about an hour later each day, so do not plan around yesterday’s schedule — check a live tide table before water activities.',
        },
        {
          id: 'high-low',
          title: 'High vs Low Tide',
          body: 'At high tide the water reaches the seawall and the bay looks fullest and most reflective — ideal for sunset photos. At low tide the shore recedes and exposes mudflats and stilted restaurants’ supports, but the promenade itself is unaffected.',
        },
        {
          id: 'best-tide',
          title: 'Best Tide for Photos',
          body: 'Golden-hour sunset shots are best near high tide, when the water meets the seawall. Low tide is better for detail shots of mudflats and the stilted structures.',
        },
        {
          id: 'season',
          title: 'Weather by Season',
          body: 'The dry season (roughly November–May) is warmest and calmest, with the most reliable sunsets. The wet season (June–October) brings afternoon showers and rougher seas; mornings are often clearer. The Sulu Sea stays warm year-round.',
        },
      ],
      faq: [
        {
          q: 'What are the Baywalk tide times?',
          a: 'There are two highs and two lows daily, shifting about an hour later each day. Check a live local tide table for the exact times on your visit date.',
        },
        {
          q: 'What tide is best for Baywalk photos?',
          a: 'Near high tide at golden hour, when the water reaches the seawall and reflections are fullest. Low tide suits detail shots of mudflats and stilts.',
        },
        {
          q: 'Does the rainy season ruin a Baywalk visit?',
          a: 'No — showers usually pass and mornings are often clear. Bring an umbrella and check the forecast; the evening still draws crowds.',
        },
        {
          q: 'What should I wear to the Baywalk?',
          a: 'Light, breathable clothing and comfortable shoes for the flat promenade. Bring a hat and sunscreen earlier in the day, and a light layer if you stay late.',
        },
      ],
      related: ['sunset-photos', 'best-time', 'things-to-do'],
    },
    fil: {
      title: 'Tides at Weather sa Baywalk — Sulu Sea Pattern at Forecast',
      description:
        'Paano nababago ng Sulu Sea tides at Palawan weather ang iyong bisita sa Baywalk: ang twice-daily tide rhythm, pinakamagandang tide para sa photo, at dry vs wet season outlook.',
      h1: 'Tides at Weather sa Baywalk',
      lead:
        'Ang Puerto Princesa ay bumubukas sa Sulu Sea, kung saan ang mga tide ay may mixed semi-diurnal rhythm — dalawang high at dalawang low bawat araw, na may saklaw na humigit-kumulang 0.5–2 metro. Narito kung paano nakakaapekto ang tubig at panahon sa iyong bisita.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'rhythm',
          title: 'Ang Pang-araw na Tide Rhythm',
          body: 'Asahan ang dalawang high tide at dalawang low tide araw-araw. Ang oras ay gumagalaw ng humigit-kumulang isang oras bawat araw, kaya huwag magplano base sa schedule kahapon — i-check ang live tide table bago ang water activity.',
        },
        {
          id: 'high-low',
          title: 'High vs Low Tide',
          body: 'Sa high tide, umaabot ang tubig sa seawall at ang bay ay pinakapuno at pinakareplektibo — perpekto para sa sunset photo. Sa low tide, humihiwalay ang shore at lumalabas ang mudflat at suporta ng nakatayong restaurant, ngunit ang promenade ay hindi naapektuhan.',
        },
        {
          id: 'best-tide',
          title: 'Pinakamagandang Tide para sa Photo',
          body: 'Ang golden-hour sunset shot ay pinakamaganda malapit sa high tide, kapag ang tubig ay umaabot sa seawall. Ang low tide ay mas bagay sa detail shot ng mudflat at stilt structure.',
        },
        {
          id: 'season',
          title: 'Panahon ayon sa Season',
          body: 'Ang dry season (humigit-kumulang Nobyembre–Mayo) ay pinakamainit at pinakamahinahon, na may pinakamapagkakatiwalaang sunset. Ang wet season (Hunyo–Oktubre) ay may afternoon shower at mas magalaw na dagat; ang umaga ay kadalasang mas malinaw. Ang Sulu Sea ay mainit buong taon.',
        },
      ],
      faq: [
        {
          q: 'Ano ang tide time sa Baywalk?',
          a: 'May dalawang high at dalawang low bawat araw, na gumagalaw ng humigit-kumulang isang oras bawat araw. I-check ang live local tide table para sa eksaktong oras sa iyong visit date.',
        },
        {
          q: 'Anong tide ang pinakamaganda para sa Baywalk photo?',
          a: 'Malapit sa high tide sa golden hour, kapag ang tubig ay umaabot sa seawall at pinakapuno ang reflection. Ang low tide ay bagay sa detail shot ng mudflat at stilt.',
        },
        {
          q: 'Sinira ba ng rainy season ang Baywalk visit?',
          a: 'Hindi — ang shower ay kadalasang tumatagal lang at ang umaga ay kadalasang malinaw. Magdala ng umbrella at i-check ang forecast; marami pa ring tao sa gabi.',
        },
        {
          q: 'Ano ang dapat suotin sa Baywalk?',
          a: 'Magaang, preskong damit at komportableng sapatos para sa patag na promenade. Magdala ng sumbrero at sunscreen sa maagang araw, at light layer kung mananatili nang mahaba.',
        },
      ],
      related: ['sunset-photos', 'best-time', 'things-to-do'],
    },
    zh: {
      title: '海湾步道潮汐与天气 — 苏禄海规律与预报',
      description: '苏禄海潮汐与巴拉望天气如何影响海湾步道之行：每日两涨两落、最佳拍照潮位，以及旱季与雨季展望。',
      h1: '海湾步道潮汐与天气',
      lead: '普林塞萨港面向苏禄海，潮汐呈混合半日潮——每天两涨两落，潮差约 0.5–2 米。下面说清海水和天气如何影响你的行程。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'rhythm',
          title: '每日潮汐规律',
          body: '每天两涨两落。时间每天约推迟一小时，所以别按昨天的时刻安排——水上活动前查当日实时潮汐表。',
        },
        {
          id: 'high-low',
          title: '涨潮与落潮',
          body: '涨潮时海水涨到海堤，海湾最饱满、倒影最足——最适合拍日落。落潮时岸边后退，露出泥滩和水上餐厅的支柱，但长廊本身不受影响。',
        },
        {
          id: 'best-tide',
          title: '最佳拍照潮位',
          body: '黄金时刻、接近涨潮时拍日落最好，海水抵海堤、倒影最满。落潮则适合拍泥滩和支柱的细节。',
        },
        {
          id: 'season',
          title: '按季节的天气',
          body: '旱季（约 11 月至 5 月）最暖最平静，日落最稳定。雨季（6 月至 10 月）午后阵雨、海面较涌；上午常更晴朗。苏禄海全年温暖。',
        },
      ],
      faq: [
        {
          q: '海湾步道潮汐时间是几点？',
          a: '每天两涨两落，每天约推迟一小时。请查你到访当日的当地实时潮汐表看准确时刻。',
        },
        {
          q: '海湾步道拍照最佳潮位？',
          a: '黄金时刻接近涨潮时最好，海水抵海堤、倒影最满。落潮适合泥滩和支柱的细节。',
        },
        {
          q: '雨季会毁了海湾步道之行吗？',
          a: '不会——阵雨通常很快过去，上午常更晴朗。带伞并看预报；傍晚依然人多。',
        },
        {
          q: '去海湾步道穿什么？',
          a: '轻薄透气衣物和舒服的鞋走平整长廊。白天早些戴帽涂防晒，久留带件薄外套。',
        },
      ],
      related: ['sunset-photos', 'best-time', 'things-to-do'],
    },
  },

  family-guide: {
    en: {
      title: 'Baywalk with Kids — Family Guide to Puerto Princesa Baywalk Park',
      description:
        'A practical family guide to the Baywalk: stroller-friendly paths, what kids enjoy, food for picky eaters, safety, and the best time to visit with children.',
      h1: 'Visiting the Baywalk with Kids',
      lead:
        'The Baywalk is one of the easiest outings in Puerto Princesa with children. It is flat, open, free to enter, and full of food — but there are a few things worth knowing before you go.',
      updated: 'October 2026',
      sections: [
        {
          id: 'stroller',
          title: 'Stroller & Walking',
          body: 'The promenade is flat, paved concrete with no steps along the main route, so a stroller is easy to push. Shade is limited at midday, so an umbrella or sun cover helps.',
        },
        {
          id: 'what-kids-like',
          title: 'What Kids Enjoy',
          body: 'There is open space to run, a constant sea breeze, street food (fruit shakes, grilled skewers), and the chance to watch fishermen and the sunset. Occasional evening events add to the buzz.',
        },
        {
          id: 'food',
          title: 'Food for Picky Eaters',
          body: 'Grilled corn, fresh fruit shakes, ice cream, and bakery snacks are easy wins. Most stalls are cash-only, so bring small bills — there is no card reader at the grills.',
        },
        {
          id: 'safety',
          title: 'Safety',
          body: 'Some stretches right at the water have no railing, so keep young children away from the edge. The area is busy in the evening; watch them near the road and bring insect repellent.',
        },
        {
          id: 'timing',
          title: 'Best Time with Kids',
          body: 'Arrive in the late afternoon (around 4–6 PM) before the dinner crowd builds. It is cooler, the light is soft, and you can watch the sunset, then eat.',
        },
      ],
      faq: [
        {
          q: 'Is the Baywalk stroller-friendly?',
          a: 'Yes — the main promenade is flat, paved, and step-free, so a stroller or pram is easy to push.',
        },
        {
          q: 'Is there an entrance fee?',
          a: 'No. The Baywalk is a public open space and free to enter, generally active from about 2 PM to midnight.',
        },
        {
          q: 'Are there toilets?',
          a: 'Public toilets are nearby, but bring small bills and do not expect them to be spotless — facilities are basic.',
        },
        {
          q: 'What should we bring with kids?',
          a: 'Water, a hat, sunscreen, insect repellent, cash, and a small umbrella or sun cover for the stroller.',
        },
      ],
      related: ['itinerary', 'restaurants', 'things-to-do'],
    },
    fil: {
      title: 'Baywalk kasama ang mga Bata — Family Guide sa Puerto Princesa Baywalk',
      description:
        'Gabay para sa pamilya sa Baywalk: stroller-friendly na daan, ano ang nagugustuhan ng mga bata, pagkain para sa mapili kumain, kaligtasan, at pinakamagandang oras pumunta.',
      h1: 'Pagpunta sa Baywalk kasama ang mga Bata',
      lead:
        'Ang Baywalk ay isa sa pinakamadaling lakarin sa Puerto Princesa kasama ang mga bata. Flat, bukas, libre pumasok, at puno ng pagkain — pero may ilang bagay na dapat malaman bago pumunta.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'stroller',
          title: 'Stroller at Paglalakad',
          body: 'Ang promenade ay flat, sementado, at walang hagdan sa main route, kaya madaling itulak ang stroller. Limitado ang lilim sa tanghali, kaya nakakatulong ang umbrella o sun cover.',
        },
        {
          id: 'what-kids-like',
          title: 'Ano ang Nagugustuhan ng mga Bata',
          body: 'May bukas na espasyo para tumakbo, hangin mula sa dagat, street food (fruit shakes, grilled skewers), at pagkakataong manood ng mga mangingisda at sunset. Minsan may evening event.',
        },
        {
          id: 'food',
          title: 'Pagkain para sa Mapili Kumain',
          body: 'Grilled corn, fresh fruit shakes, ice cream, at bakery snacks ay madaling panalo. Karamihan ng stall ay cash lang, kaya magdala ng barya — walang card reader sa grill.',
        },
        {
          id: 'safety',
          title: 'Kaligtasan',
          body: 'Ang ilang bahagi sa tabi ng tubig ay walang railings, kaya iwasan ang gilid para sa mga bata. Marami ang tao sa gabi; bantayan sa kalsada at magdala ng insect repellent.',
        },
        {
          id: 'timing',
          title: 'Pinakamagandang Oras kasama ang mga Bata',
          body: 'Dumating sa hapon (humigit-kumulang 4–6 PM) bago ang dinner crowd. Mas presko, malambot ang ilaw, at pwede panoorin ang sunset, tapos kumain.',
        },
      ],
      faq: [
        {
          q: 'Stroller-friendly ba ang Baywalk?',
          a: 'Oo — ang main promenade ay flat, sementado, at walang hagdan, kaya madaling itulak ang stroller o pram.',
        },
        {
          q: 'May entrance fee ba?',
          a: 'Wala. Ang Baywalk ay public open space at libre pumasok, karaniwang bukas mula humigit-kumulang 2 PM hanggang midnight.',
        },
        {
          q: 'May banyo ba?',
          a: 'May public toilet malapit, pero magdala ng barya at huwag asahan na malinis — basic lang ang facilities.',
        },
        {
          q: 'Ano ang dalhin kasama ang mga bata?',
          a: 'Tubig, sumbrero, sunscreen, insect repellent, cash, at maliit na umbrella o sun cover para sa stroller.',
        },
      ],
      related: ['itinerary', 'restaurants', 'things-to-do'],
    },
    zh: {
      title: '带娃逛海湾步道 — 普林塞萨港海湾步道亲子指南',
      description: '一份适合家庭的海湾步道指南：婴儿车友好的步道、孩子喜欢什么、挑食也能吃的食物、安全提示，以及带娃最佳时段。',
      h1: '带娃逛海湾步道',
      lead: '海湾步道是普林塞萨港带娃最轻松的去处之一：平坦、开放、免费进入，还满是吃的——不过出发前有几件事值得知道。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'stroller',
          title: '婴儿车与步行',
          body: '长廊是平整的水泥地，主路线无台阶，推婴儿车很轻松。正午遮阴有限，带把伞或遮阳罩更舒服。',
        },
        {
          id: 'what-kids-like',
          title: '孩子喜欢什么',
          body: '有可以跑的开阔地、源源不断的海风、街头小食（水果冰沙、烤串），还能看渔民和日落。偶有的傍晚活动更添热闹。',
        },
        {
          id: 'food',
          title: '挑食也能吃',
          body: '烤玉米、鲜榨水果冰沙、冰淇淋、面包店小食都是好选择。多数摊位只收现金，备好零钱——烤摊没有刷卡机。',
        },
        {
          id: 'safety',
          title: '安全',
          body: '临水部分段落没有护栏，看紧幼儿远离边缘。傍晚人多，靠近马路要看管，并带防蚊液。',
        },
        {
          id: 'timing',
          title: '带娃最佳时段',
          body: '下午较晚时（约 16:00–18:00）在晚餐人潮前到达最佳。更凉快、光线柔和，可看日落再吃饭。',
        },
      ],
      faq: [
        {
          q: '海湾步道适合推婴儿车吗？',
          a: '适合——主长廊平整、水泥地、无台阶，婴儿车或推车都能轻松推行。',
        },
        {
          q: '要门票吗？',
          a: '不要。海湾步道是公共开放空间，免费进入，通常约 14:00 至午夜有活动。',
        },
        {
          q: '有厕所吗？',
          a: '附近有公共厕所，但备好零钱，且别指望很干净——设施比较基础。',
        },
        {
          q: '带娃要带什么？',
          a: '水、帽子、防晒、防蚊液、现金，以及给婴儿车用的小伞或遮阳罩。',
        },
      ],
      related: ['itinerary', 'restaurants', 'things-to-do'],
    },
  },

  accessibility: {
    en: {
      title: 'Baywalk Accessibility — Wheelchair & Mobility Guide',
      description:
        'Practical accessibility info for the Baywalk: flat paved paths, step-free routes, toilets, lighting, and tips for wheelchair users and visitors with limited mobility.',
      h1: 'Accessibility at the Baywalk',
      lead:
        'Because the Baywalk is a modern waterfront promenade, most of it is reachable without steps. Here is what to expect for wheelchairs, strollers, and visitors with limited mobility.',
      updated: 'October 2026',
      sections: [
        {
          id: 'surface',
          title: 'Surface & Route',
          body: 'The promenade is flat, even concrete along the main walk, with no steps on the seafront route. Some side entries from the road have curbs, so aim for the gentler access points.',
        },
        {
          id: 'width',
          title: 'Path Width',
          body: 'The walk is wide with room to pass, but the evening food crowd can narrow the usable space. Visiting earlier in the afternoon keeps it calmer.',
        },
        {
          id: 'toilets',
          title: 'Toilets',
          body: 'Public toilets sit near the park. Accessibility varies and some lack a ramp or grab bars, so plan ahead and travel with a companion if you rely on them.',
        },
        {
          id: 'lighting',
          title: 'Lighting',
          body: 'The promenade is well lit after dark, which helps visitors with low vision. Watch for the occasional uneven spot near the edges.',
        },
        {
          id: 'getting-there',
          title: 'Getting There',
          body: 'From the airport it is about 2 km by tricycle over flat roads; from the city proper the approach is also flat, making the last stretch easy for wheelchairs.',
        },
      ],
      faq: [
        {
          q: 'Is the Baywalk wheelchair accessible?',
          a: 'Mostly yes — the main seafront promenade is flat and step-free. A few side entries from the road have curbs, so choose the smoother access points.',
        },
        {
          q: 'Are there ramps?',
          a: 'The main walk is step-free, but public toilet accessibility varies, so do not count on a ramp or grab bars at every facility.',
        },
        {
          q: 'Is it lit at night?',
          a: 'Yes, the promenade is lit after dark, which also helps with orientation for low-vision visitors.',
        },
        {
          q: 'When is it least crowded?',
          a: 'Mid-afternoon is calmest; evenings are the busiest, especially around dinner time.',
        },
      ],
      related: ['getting-there', 'safety-tips', 'things-to-do'],
    },
    fil: {
      title: 'Accessibility sa Baywalk — Wheelchair at Mobility Guide',
      description:
        'Praktikal na accessibility info sa Baywalk: flat na daan, step-free na ruta, banyo, ilaw, at tips para sa wheelchair user at may limitadong mobility.',
      h1: 'Accessibility sa Baywalk',
      lead:
        'Dahil modernong waterfront promenade ang Baywalk, karamihan nito ay maabot nang walang hagdan. Narito kung ano ang aasahan para sa wheelchair, stroller, at visitor na may limitadong mobility.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'surface',
          title: 'Surface at Ruta',
          body: 'Ang promenade ay flat, pantay na semento sa main walk, walang hagdan sa seafront route. Ang ilang side entry mula sa kalsada ay may curb, kaya piliin ang mas maalong access point.',
        },
        {
          id: 'width',
          title: 'Lapad ng Daan',
          body: 'Malawak ang walk at may space para makadaan, pero ang gabi food crowd ay pwedeng magiit. Ang pagpunta nang maaga sa hapon ay mas kalmado.',
        },
        {
          id: 'toilets',
          title: 'Banyo',
          body: 'May public toilet malapit sa park. Nag-iiba ang accessibility at ang ilan ay walang ramp o grab bar, kaya mag-plan ahead at mag-travel kasama ang companion kung umaasa ka rito.',
        },
        {
          id: 'lighting',
          title: 'Ilaw',
          body: 'Maayos na ilaw ang promenade pagkadilim, nakakatulong sa low-vision. Bantayan ang paminsan-minsang hindi pantay na bahagi sa gilid.',
        },
        {
          id: 'getting-there',
          title: 'Pagpunta',
          body: 'Mula airport ay humigit-kumulang 2 km via tricycle sa flat na kalsada; mula city proper ay flat din ang approach, madali para sa wheelchair ang huling stretch.',
        },
      ],
      faq: [
        {
          q: 'Wheelchair accessible ba ang Baywalk?',
          a: 'Karamihan oo — ang main seafront promenade ay flat at step-free. Ang ilang side entry mula sa kalsada ay may curb, kaya piliin ang mas maalong access point.',
        },
        {
          q: 'May ramp ba?',
          a: 'Step-free ang main walk, pero nag-iiba ang public toilet accessibility, kaya huwag umasa sa ramp o grab bar sa bawat facility.',
        },
        {
          q: 'May ilaw ba sa gabi?',
          a: 'Oo, may ilaw ang promenade pagkadilim, nakakatulong din sa orientation para sa low-vision visitor.',
        },
        {
          q: 'Kailan pinakakonti ang tao?',
          a: 'Ang tanghali ay pinakakalmado; gabi ang pinakamarami, lalo na sa dinner time.',
        },
      ],
      related: ['getting-there', 'safety-tips', 'things-to-do'],
    },
    zh: {
      title: '海湾步道无障碍 — 轮椅与行动便利指南',
      description: '海湾步道的实用无障碍信息：平整步道、无台阶路线、厕所、照明，以及轮椅与行动不便者的贴士。',
      h1: '海湾步道无障碍',
      lead: '因为海湾步道是现代化的滨海长廊，大部分路段无需台阶即可到达。下面是轮椅、婴儿车和行动不便游客可期待的情况。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'surface',
          title: '路面与路线',
          body: '长廊主步道是平整均匀的水泥地，临海路线无台阶。从马路进入的个别侧道口有路缘石，尽量选较平缓的入口。',
        },
        {
          id: 'width',
          title: '步道宽度',
          body: '步道宽敞、便于通行，但傍晚美食人潮会挤占可用空间。午后早些前往更从容。',
        },
        {
          id: 'toilets',
          title: '厕所',
          body: '公园附近有公共厕所。无障碍程度不一，部分可能缺坡道或扶手，请提前规划；若依赖这些设施，最好有人陪同。',
        },
        {
          id: 'lighting',
          title: '照明',
          body: '天黑后长廊照明良好，也方便视力较弱者辨向。注意边缘个别处略有不平。',
        },
        {
          id: 'getting-there',
          title: '如何到达',
          body: '距机场约 2 公里，乘三轮车走平坦道路；从市区过来也是平路，最后一公里对轮椅很轻松。',
        },
      ],
      faq: [
        {
          q: '能坐轮椅去海湾步道吗？',
          a: '基本可以——主临海长廊平整、无台阶。个别从马路进入的侧口有路缘石，选较平缓的入口即可。',
        },
        {
          q: '有坡道吗？',
          a: '主步道无台阶，但公共厕所无障碍程度不一，别指望每个设施都有坡道或扶手。',
        },
        {
          q: '晚上有灯吗？',
          a: '有，天黑后长廊照明良好，也利于视力较弱者辨向。',
        },
        {
          q: '什么时候人最少？',
          a: '午后最从容；傍晚最挤，尤其临近晚餐时段。',
        },
      ],
      related: ['getting-there', 'safety-tips', 'things-to-do'],
    },
  },

  'rainy-day': {
    en: {
      title: 'Baywalk Rainy-Day Alternatives — Indoor Plans in Puerto Princesa',
      description:
        'Caught in the rain at the Baywalk? Indoor alternatives nearby: malls with cinemas and food courts, the cathedral, Plaza Cuartel, and the Palawan Museum — plus what to do if the shower passes.',
      h1: 'Baywalk Rainy-Day Alternatives',
      lead:
        'The Baywalk is open-air, so a heavy shower sends everyone under cover. The good news: Puerto Princesa city center has several easy indoor options a short tricycle ride away.',
      updated: 'October 2026',
      sections: [
        {
          id: 'why-open-air',
          title: 'Why It Is Open-Air',
          body: 'There is no roof over the promenade. Brief showers are common in the wet season (roughly June–October) and usually pass within an hour, so a little patience often wins.',
        },
        {
          id: 'mall',
          title: 'City Malls',
          body: 'The city malls, about 1.5 km away, have air-conditioning, a cinema, a food court, and a supermarket — a comfortable place to wait out a longer downpour.',
        },
        {
          id: 'cathedral',
          title: 'Immaculate Conception Cathedral',
          body: 'The central cathedral is cool, quiet, and free to enter — a calming stop between showers, right in the city center.',
        },
        {
          id: 'plaza-cuartel',
          title: 'Plaza Cuartel',
          body: 'This grassy ruin park is partly open, so it is best visited between showers rather than during one. The history is interesting when the weather clears.',
        },
        {
          id: 'museum',
          title: 'Palawan Museum & Heritage Spots',
          body: 'Indoor cultural stops in the center — such as the local museum — are a good rainy-hour plan and add context to your Palawan trip.',
        },
        {
          id: 'if-shower-passes',
          title: 'If the Shower Passes',
          body: 'Showers are often short. Wait it out at a covered eatery, then return for the sunset, and always check the forecast before you head out.',
        },
      ],
      faq: [
        {
          q: 'Is the Baywalk covered?',
          a: 'No — it is an open-air promenade with no roof, so heavy rain sends visitors to nearby sheltered spots.',
        },
        {
          q: 'What can we do in the rain?',
          a: 'Head to a city mall (cinema, food court), the central cathedral, a local museum, or a covered food court until it eases.',
        },
        {
          q: 'Does rain ruin a Baywalk visit?',
          a: 'Usually not for long — showers are often brief, and mornings in the wet season are frequently clearer than afternoons.',
        },
        {
          q: 'What should we bring?',
          a: 'A compact umbrella or a light raincoat; many locals carry one year-round.',
        },
      ],
      related: ['best-time', 'nearby-attractions', 'things-to-do'],
    },
    fil: {
      title: 'Baywalk Rainy-Day Alternatives — Indoor Plans sa Puerto Princesa',
      description:
        'Umuulan sa Baywalk? Indoor options malapit: mall na may cinema at food court, cathedral, Plaza Cuartel, at Palawan Museum — plus kung lalampas ang shower.',
      h1: 'Baywalk Rainy-Day Alternatives',
      lead:
        'Ang Baywalk ay open-air, kaya ang malakas na ulan ay nagpapasok sa lahat sa silong. Buti na lang: ang city center ng Puerto Princesa ay may ilang madaling indoor option na malapit lang via tricycle.',
      updated: 'Oktubre 2026',
      sections: [
        {
          id: 'why-open-air',
          title: 'Bakit Ito ay Open-Air',
          body: 'Walang bubong sa promenade. Karaniwan ang maikling shower sa wet season (humigit-kumulang Hunyo–Oktubre) at kadalasang lumampas sa loob ng isang oras, kaya konting pasensya ay madalas sapat.',
        },
        {
          id: 'mall',
          title: 'City Malls',
          body: 'Ang city mall, humigit-kumulang 1.5 km ang layo, ay may air-con, cinema, food court, at supermarket — komportableng lugar para hintayin ang mas mahabang ulan.',
        },
        {
          id: 'cathedral',
          title: 'Immaculate Conception Cathedral',
          body: 'Ang central cathedral ay presko, tahimik, at libre pumasok — kalmadong stop sa pagitan ng shower, nasa gitna ng city.',
        },
        {
          id: 'plaza-cuartel',
          title: 'Plaza Cuartel',
          body: 'Ang grassy ruin park na ito ay bahagyang open, kaya mas mabuti bisitahin sa pagitan ng shower kaysa habang umuulan. Interesante ang history kapag umaliwalas.',
        },
        {
          id: 'museum',
          title: 'Palawan Museum at Heritage Spots',
          body: 'Indoor cultural stop sa center — tulad ng local museum — mabuting plano sa rainy hour at nagdadagdag ng context sa Palawan trip mo.',
        },
        {
          id: 'if-shower-passes',
          title: 'Kung Lalampas ang Shower',
          body: 'Madalas maikli ang shower. Maghintay sa covered eatery, bumalik para sa sunset, at i-check ang forecast bago umalis.',
        },
      ],
      faq: [
        {
          q: 'May bubong ba ang Baywalk?',
          a: 'Wala — open-air promenade na walang bubong, kaya ang malakas na ulan ay nagpapapunta sa mga sheltered spot malapit.',
        },
        {
          q: 'Ano gagawin sa ulan?',
          a: 'Pumunta sa city mall (cinema, food court), central cathedral, local museum, o covered food court hanggang humupa.',
        },
        {
          q: 'Sira ba ng ulan ang Baywalk visit?',
          a: 'Kadalasa hindi matagal — madalas maikli ang shower, at ang umaga sa wet season ay madalas na mas malinaw kaysa hapon.',
        },
        {
          q: 'Ano ang dalhin?',
          a: 'Kompaktong umbrella o light raincoat; maraming lokal ang may dala nito buong taon.',
        },
      ],
      related: ['best-time', 'nearby-attractions', 'things-to-do'],
    },
    zh: {
      title: '海湾步道雨天备选 — 普林塞萨港室内方案',
      description: '在海湾步道遇雨怎么办？附近的室内去处：带影院和美食广场的商场、大教堂、Plaza Cuartel、巴拉望博物馆——以及阵雨过去后的安排。',
      h1: '海湾步道雨天备选',
      lead: '海湾步道是露天的，一场大雨会把所有人都赶到屋檐下。好消息是：普林塞萨港市中心有几个短乘三轮车即达的室内选项。',
      updated: '2026 年 10 月',
      sections: [
        {
          id: 'why-open-air',
          title: '为何露天',
          body: '长廊没有顶棚。雨季（约 6–10 月）常有短暂阵雨，通常一小时内就过去，稍等往往就放晴。',
        },
        {
          id: 'mall',
          title: '市区商场',
          body: '市区商场约 1.5 公里，有空调、影院、美食广场和超市——适合在较大降雨时从容等待。',
        },
        {
          id: 'cathedral',
          title: '无原罪大教堂',
          body: '市中心的大教堂凉爽、安静、免费进入——阵雨间隙一处让人平静的落脚地。',
        },
        {
          id: 'plaza-cuartel',
          title: 'Plaza Cuartel',
          body: '这片草坪遗迹公园部分露天，最好在两场雨之间而非雨中游览。天晴时历史感更足。',
        },
        {
          id: 'museum',
          title: '巴拉望博物馆与文化点',
          body: '市中心室内的文化去处——如本地博物馆——是雨天消磨时光的好安排，也为巴拉望之行增添背景。',
        },
        {
          id: 'if-shower-passes',
          title: '阵雨过去后',
          body: '阵雨通常很短。在带顶棚的餐馆等一等，再回来赏日落；出发前看一眼预报。',
        },
      ],
      faq: [
        {
          q: '海湾步道有顶棚吗？',
          a: '没有——是露天长廊、无顶棚，所以大雨会把游客赶到附近有遮挡的地方。',
        },
        {
          q: '下雨做什么？',
          a: '去市区商场（影院、美食广场）、市中心大教堂、本地博物馆，或带顶棚的美食广场，等雨小。',
        },
        {
          q: '下雨会毁了海湾步道之行吗？',
          a: '通常不会太久——阵雨往往很短，雨季的上午常比下午更晴朗。',
        },
        {
          q: '带什么？',
          a: '一把轻便雨伞或薄雨衣；不少当地人都一年四季随身带。',
        },
      ],
      related: ['best-time', 'nearby-attractions', 'things-to-do'],
    },
  },
};

export function getTopic(slug: TopicSlug, lang: TopicLang): TopicContent {
  return topics[slug][lang];
}

export function topicSlugsForLang(lang: TopicLang): TopicSlug[] {
  return TOPIC_SLUGS.filter((slug) => topics[slug] && topics[slug][lang]);
}
