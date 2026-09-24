import type { Tx } from "@/lib/locale";

export const PROFILE = {
  name: "Tang Chin Hong",
  monogram: "TANG CHIN HONG PORTFOLIO",
  phoneDisplay: "+852 9806 4424",
  phoneHref: "tel:+85298064424",
  email: "hon1414@hotmail.com",
  emailHref: "mailto:hon1414@hotmail.com",
  location: { en: "Hong Kong", zh: "香港" } satisfies Tx,
  youtubePlaylist:
    "https://www.youtube.com/playlist?list=PLMtJF5eSRY4PoCiHQCEKNNO359oBvxWQ_",
  role: {
    en: "Video Producer / Video Editor / AI Creator",
    zh: "影像製作 · 剪接 · AI 創作者",
  } satisfies Tx,
  kicker: {
    en: "Creative Development  ·  Editorial  ·  Post-Production",
    zh: "創意發展  ·  剪接  ·  後期製作",
  } satisfies Tx,
  headline: {
    en: "Stories, cut with precision.",
    zh: "把構想，剪成影像。",
  } satisfies Tx,
  bio: {
    en: "Collaborative video producer skilled in turning a brief into a finished frame — creative development, editorial, and post. I build generative-AI into the pipeline so the work stays fast, sharp, and cinematic.",
    zh: "善於協作的影像製作人，從brief到成片一手貫穿創意、剪接與後期。把生成式 AI 編進流程，讓製作更快、更準、更有電影感。",
  } satisfies Tx,
  loaderWords: {
    en: ["Create", "Direct", "Edit"],
    zh: ["創意", "導演", "剪接"],
  },
};

export const NAV = [
  { id: "reel", label: { en: "Reel", zh: "Showreel" } satisfies Tx },
  { id: "work", label: { en: "Work", zh: "作品" } satisfies Tx },
  { id: "contact", label: { en: "Contact", zh: "聯絡" } satisfies Tx },
];

export const SHOWREEL = {
  youtubeId: "eT3OxdmIMpM",
  url: "https://youtu.be/eT3OxdmIMpM",
};

export const CAPABILITIES = [
  {
    key: "01",
    title: { en: "Creative Development", zh: "創意發展" } satisfies Tx,
    body: {
      en: "TVC ideas, scripts, and visual worlds aligned to brand strategy.",
      zh: "TVC 構思、劇本與影像世界，對準品牌策略。",
    } satisfies Tx,
  },
  {
    key: "02",
    title: { en: "Production", zh: "製作" } satisfies Tx,
    body: {
      en: "On-set direction for commercials, promos, and variety television.",
      zh: "廣告、宣傳片與綜藝節目的現場執導。",
    } satisfies Tx,
  },
  {
    key: "03",
    title: { en: "Post-Production", zh: "後期製作" } satisfies Tx,
    body: {
      en: "Editorial, motion graphics, VFX, and color that carry the story.",
      zh: "剪接、動態圖像、視覺特效與調色，把故事撐起來。",
    } satisfies Tx,
  },
  {
    key: "04",
    title: { en: "AI Workflow", zh: "AI 工作流" } satisfies Tx,
    body: {
      en: "End-to-end generative video pipelines engineered for real delivery.",
      zh: "為真實交付而設計的生成式影像全流程。",
    } satisfies Tx,
  },
];

export type Project = {
  id: string;
  title: Tx;
  client: Tx;
  year: string;
  category: Tx;
  roles: Tx[];
  poster: string;
  video: string;
  youtubeId: string;
};

export const PROJECTS: Project[] = [
  {
    id: "joint",
    title: { en: "Joint Care TVC", zh: "健關節 TVC" },
    client: { en: "Health & Wellness", zh: "保健品牌" },
    year: "2025",
    category: { en: "TVC", zh: "廣告" },
    roles: [
      { en: "Idea", zh: "構思" },
      { en: "Script", zh: "劇本" },
      { en: "On-set Director", zh: "現場導演" },
      { en: "Edit", zh: "剪接" },
      { en: "VFX", zh: "特效" },
      { en: "Color", zh: "調色" },
    ],
    poster: "/media/posters/joint.jpg",
    video: "/media/works/joint.mp4",
    youtubeId: "fGs423Wzulo",
  },
  {
    id: "ai-tvc",
    title: { en: "AI TVC", zh: "AI TVC" },
    client: { en: "ROYAL MEDIC", zh: "ROYAL MEDIC" },
    year: "2026",
    category: { en: "AI + TVC", zh: "AI + 廣告" },
    roles: [
      { en: "Idea", zh: "構思" },
      { en: "Develop", zh: "發展" },
      { en: "Script", zh: "劇本" },
      { en: "Edit", zh: "剪接" },
      { en: "VFX", zh: "特效" },
      { en: "Color", zh: "調色" },
    ],
    poster: "/media/posters/ai-tvc.jpg",
    video: "/media/works/ai-tvc.mp4",
    youtubeId: "sKUDpDwiojQ",
  },
  {
    id: "royal",
    title: { en: "Prostate Care", zh: "Prostate Care" },
    client: { en: "ROYAL MEDIC", zh: "ROYAL MEDIC" },
    year: "2024",
    category: { en: "TVC", zh: "廣告" },
    roles: [
      { en: "Concept", zh: "概念" },
      { en: "Script", zh: "劇本" },
      { en: "On-set Director", zh: "現場導演" },
      { en: "Edit", zh: "剪接" },
      { en: "AI Effect", zh: "AI 特效" },
    ],
    poster: "/media/posters/royal.jpg",
    video: "/media/works/royal.mp4",
    youtubeId: "KUodvkvONOM",
  },
  {
    id: "istu",
    title: { en: "Massage Chair", zh: "Massage Chair" },
    client: { en: "ISTU", zh: "ISTU" },
    year: "2022",
    category: { en: "Commercial", zh: "廣告" },
    roles: [
      { en: "Develop", zh: "發展" },
      { en: "Edit", zh: "剪接" },
      { en: "Color", zh: "調色" },
    ],
    poster: "/media/posters/istu.jpg",
    video: "/media/works/istu.mp4",
    youtubeId: "ef71JxdGWUw",
  },
  {
    id: "love",
    title: { en: "Love in Vaines", zh: "Love in Vaines" },
    client: { en: "TV", zh: "TV" },
    year: "2014",
    category: { en: "Short Film", zh: "短片" },
    roles: [
      { en: "Develop", zh: "發展" },
      { en: "Script", zh: "劇本" },
      { en: "Edit", zh: "剪接" },
      { en: "VFX", zh: "特效" },
      { en: "Music", zh: "音樂" },
      { en: "Color", zh: "調色" },
    ],
    poster: "/media/posters/love.jpg",
    video: "/media/works/love.mp4",
    youtubeId: "5900q0-jmx8",
  },
  {
    id: "thinkbig",
    title: { en: "Think Big", zh: "Think Big 天地" },
    client: { en: "online video", zh: "online video" },
    year: "2019",
    category: { en: "Kids TV", zh: "兒童節目" },
    roles: [
      { en: "Develop", zh: "發展" },
      { en: "Script", zh: "劇本" },
      { en: "Edit", zh: "剪接" },
      { en: "Color", zh: "調色" },
    ],
    poster: "/media/posters/thinkbig.jpg",
    video: "/media/works/thinkbig.mp4",
    youtubeId: "-a8iKs5opyI",
  },
  {
    id: "memories",
    title: { en: "Memories", zh: "Memories" },
    client: { en: "MRRM", zh: "MRRM" },
    year: "2021",
    category: { en: "Motion", zh: "動態設計" },
    roles: [
      { en: "Script", zh: "劇本" },
      { en: "Edit", zh: "剪接" },
      { en: "VFX", zh: "特效" },
      { en: "2D / 3D", zh: "2D / 3D" },
      { en: "Color", zh: "調色" },
    ],
    poster: "/media/posters/memories.jpg",
    video: "/media/works/memories.mp4",
    youtubeId: "VhZ4NuKOPDU",
  },
  {
    id: "ai-video",
    title: { en: "MainlandHeadwear", zh: "MainlandHeadwear" },
    client: { en: "corporate", zh: "corporate" },
    year: "2020",
    category: { en: "corporate video", zh: "corporate video" },
    roles: [
      { en: "Concept", zh: "概念" },
      { en: "Character", zh: "角色" },
      { en: "Execution", zh: "執行" },
    ],
    poster: "/media/posters/ai-video.jpg",
    video: "/media/works/ai-video.mp4",
    youtubeId: "c1vcjeaO4f4",
  },
];

export const SHOWS = [
  "萬千星輝賀台慶",
  "香港小姐",
  "星夢傳奇",
  "美女廚房",
  "Think Big 天地",
  "Hands Up",
  "旅遊",
  "飲食",
  "怪談",
];

export const JOBS = [
  {
    company: "Ginger Advertising LTD.",
    role: { en: "Video Producer", zh: "影像製作" } satisfies Tx,
    period: { en: "Mar 2023 — Jul 2026", zh: "2023.03 — 2026.07" } satisfies Tx,
    bullets: [
      {
        en: "Led TVC creative development, scriptwriting, and visual storytelling aligned with brand strategies.",
        zh: "主導 TVC 創意發展、劇本與影像敘事，對準品牌策略。",
      },
      {
        en: "Integrated generative AI tools and engineered end-to-end workflows for AI-generated video production.",
        zh: "導入生成式 AI，建立由構思到成片的 AI 影像工作流。",
      },
      {
        en: "Managed print collateral production and organised small-scale promotional events.",
        zh: "負責平面物料製作，並統籌小型宣傳活動。",
      },
    ] satisfies Tx[],
  },
  {
    company: "Television Broadcasts Limited",
    role: { en: "Visual Producer", zh: "視覺製作" } satisfies Tx,
    period: { en: "Sep 2017 — Mar 2022", zh: "2017.09 — 2022.03" } satisfies Tx,
    bullets: [
      {
        en: "Directed end-to-end video production for TV promos and high-profile variety — 萬千星輝賀台慶, 香港小姐, 星夢傳奇, 美女廚房.",
        zh: "執導電視台宣傳片及大型綜藝全流程製作——萬千星輝賀台慶、香港小姐、星夢傳奇、美女廚房。",
      },
      {
        en: "Managed social channels for Think Big 天地 and Hands Up, driving 20M+ views and 20K+ subscribers.",
        zh: "主理 Think Big 天地、Hands Up 社交渠道，累積逾 2,000 萬觀看、2 萬訂閱。",
      },
    ] satisfies Tx[],
  },
  {
    company: "I-Cable Communications Limited",
    role: { en: "Video Editor", zh: "剪接" } satisfies Tx,
    period: { en: "May 2011 — Sep 2017", zh: "2011.05 — 2017.09" } satisfies Tx,
    bullets: [
      {
        en: "Edited variety, travel, food, and folklore programmes, shaping narrative with producers.",
        zh: "剪接綜藝、旅遊、飲食與怪談節目，與監製共同構築敘事。",
      },
      {
        en: "Delivered high-end motion graphics and professional color grading.",
        zh: "輸出高階動態圖像與專業調色，提升後期質感。",
      },
    ] satisfies Tx[],
  },
  {
    company: "Corp-Vision Media Limited",
    role: { en: "Project Manager", zh: "項目經理" } satisfies Tx,
    period: { en: "May 2007 — Dec 2010", zh: "2007.05 — 2010.12" } satisfies Tx,
    bullets: [
      {
        en: "Managed full production lifecycles and cross-functional teams for corporate and government media.",
        zh: "管理企業及政府媒體項目的完整製作週期與跨部門團隊。",
      },
    ] satisfies Tx[],
  },
];

export const EDUCATION = {
  title: { en: "HD in Digital Media", zh: "數碼媒體高級文憑" } satisfies Tx,
  school: {
    en: "Hong Kong Institute of Vocational Education",
    zh: "香港專業教育學院",
  } satisfies Tx,
};

export const STATS = [
  { value: "18+", label: { en: "Years in production", zh: "年製作經驗" } satisfies Tx },
  { value: "20M+", label: { en: "Social views", zh: "社交觀看" } satisfies Tx },
  { value: "TVB", label: { en: "Variety & promos", zh: "綜藝與宣傳" } satisfies Tx },
  { value: "AI", label: { en: "End-to-end pipeline", zh: "全流程工作流" } satisfies Tx },
];
