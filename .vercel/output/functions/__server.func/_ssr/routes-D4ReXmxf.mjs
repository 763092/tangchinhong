import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, r as Play, t as X } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D4ReXmxf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROFILE = {
	name: "Tang Chin Hong",
	monogram: "TANG CHIN HONG PORTFOLIO",
	phoneDisplay: "+852 9806 4424",
	phoneHref: "tel:+85298064424",
	email: "hon1414@hotmail.com",
	emailHref: "mailto:hon1414@hotmail.com",
	location: {
		en: "Hong Kong",
		zh: "香港"
	},
	youtubePlaylist: "https://www.youtube.com/playlist?list=PLMtJF5eSRY4PoCiHQCEKNNO359oBvxWQ_",
	role: {
		en: "Video Producer / Video Editor / AI Creator",
		zh: "影像製作 · 剪接 · AI 創作者"
	},
	kicker: {
		en: "Creative Development  ·  Editorial  ·  Post-Production",
		zh: "創意發展  ·  剪接  ·  後期製作"
	},
	headline: {
		en: "Stories, cut with precision.",
		zh: "把構想，剪成影像。"
	},
	bio: {
		en: "Collaborative video producer skilled in turning a brief into a finished frame — creative development, editorial, and post. I build generative-AI into the pipeline so the work stays fast, sharp, and cinematic.",
		zh: "善於協作的影像製作人，從brief到成片一手貫穿創意、剪接與後期。把生成式 AI 編進流程，讓製作更快、更準、更有電影感。"
	},
	loaderWords: {
		en: [
			"Create",
			"Direct",
			"Edit"
		],
		zh: [
			"創意",
			"導演",
			"剪接"
		]
	}
};
var NAV = [
	{
		id: "reel",
		label: {
			en: "Reel",
			zh: "Showreel"
		}
	},
	{
		id: "work",
		label: {
			en: "Work",
			zh: "作品"
		}
	},
	{
		id: "contact",
		label: {
			en: "Contact",
			zh: "聯絡"
		}
	}
];
var SHOWREEL = {
	youtubeId: "eT3OxdmIMpM",
	url: "https://youtu.be/eT3OxdmIMpM"
};
var PROJECTS = [
	{
		id: "joint",
		title: {
			en: "Joint Care TVC",
			zh: "健關節 TVC"
		},
		client: {
			en: "Health & Wellness",
			zh: "保健品牌"
		},
		year: "2025",
		category: {
			en: "TVC",
			zh: "廣告"
		},
		roles: [
			{
				en: "Idea",
				zh: "構思"
			},
			{
				en: "Script",
				zh: "劇本"
			},
			{
				en: "On-set Director",
				zh: "現場導演"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "VFX",
				zh: "特效"
			},
			{
				en: "Color",
				zh: "調色"
			}
		],
		poster: "/media/posters/joint.jpg",
		video: "/media/works/joint.mp4",
		youtubeId: "fGs423Wzulo"
	},
	{
		id: "ai-tvc",
		title: {
			en: "AI TVC",
			zh: "AI TVC"
		},
		client: {
			en: "ROYAL MEDIC",
			zh: "ROYAL MEDIC"
		},
		year: "2026",
		category: {
			en: "AI + TVC",
			zh: "AI + 廣告"
		},
		roles: [
			{
				en: "Idea",
				zh: "構思"
			},
			{
				en: "Develop",
				zh: "發展"
			},
			{
				en: "Script",
				zh: "劇本"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "VFX",
				zh: "特效"
			},
			{
				en: "Color",
				zh: "調色"
			}
		],
		poster: "/media/posters/ai-tvc.jpg",
		video: "/media/works/ai-tvc.mp4",
		youtubeId: "sKUDpDwiojQ"
	},
	{
		id: "royal",
		title: {
			en: "Prostate Care",
			zh: "Prostate Care"
		},
		client: {
			en: "ROYAL MEDIC",
			zh: "ROYAL MEDIC"
		},
		year: "2024",
		category: {
			en: "TVC",
			zh: "廣告"
		},
		roles: [
			{
				en: "Concept",
				zh: "概念"
			},
			{
				en: "Script",
				zh: "劇本"
			},
			{
				en: "On-set Director",
				zh: "現場導演"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "AI Effect",
				zh: "AI 特效"
			}
		],
		poster: "/media/posters/royal.jpg",
		video: "/media/works/royal.mp4",
		youtubeId: "KUodvkvONOM"
	},
	{
		id: "istu",
		title: {
			en: "Massage Chair",
			zh: "Massage Chair"
		},
		client: {
			en: "ISTU",
			zh: "ISTU"
		},
		year: "2022",
		category: {
			en: "Commercial",
			zh: "廣告"
		},
		roles: [
			{
				en: "Develop",
				zh: "發展"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "Color",
				zh: "調色"
			}
		],
		poster: "/media/posters/istu.jpg",
		video: "/media/works/istu.mp4",
		youtubeId: "ef71JxdGWUw"
	},
	{
		id: "love",
		title: {
			en: "Love in Vaines",
			zh: "Love in Vaines"
		},
		client: {
			en: "TV",
			zh: "TV"
		},
		year: "2014",
		category: {
			en: "Short Film",
			zh: "短片"
		},
		roles: [
			{
				en: "Develop",
				zh: "發展"
			},
			{
				en: "Script",
				zh: "劇本"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "VFX",
				zh: "特效"
			},
			{
				en: "Music",
				zh: "音樂"
			},
			{
				en: "Color",
				zh: "調色"
			}
		],
		poster: "/media/posters/love.jpg",
		video: "/media/works/love.mp4",
		youtubeId: "5900q0-jmx8"
	},
	{
		id: "thinkbig",
		title: {
			en: "Think Big",
			zh: "Think Big 天地"
		},
		client: {
			en: "online video",
			zh: "online video"
		},
		year: "2019",
		category: {
			en: "Kids TV",
			zh: "兒童節目"
		},
		roles: [
			{
				en: "Develop",
				zh: "發展"
			},
			{
				en: "Script",
				zh: "劇本"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "Color",
				zh: "調色"
			}
		],
		poster: "/media/posters/thinkbig.jpg",
		video: "/media/works/thinkbig.mp4",
		youtubeId: "-a8iKs5opyI"
	},
	{
		id: "memories",
		title: {
			en: "Memories",
			zh: "Memories"
		},
		client: {
			en: "MRRM",
			zh: "MRRM"
		},
		year: "2021",
		category: {
			en: "Motion",
			zh: "動態設計"
		},
		roles: [
			{
				en: "Script",
				zh: "劇本"
			},
			{
				en: "Edit",
				zh: "剪接"
			},
			{
				en: "VFX",
				zh: "特效"
			},
			{
				en: "2D / 3D",
				zh: "2D / 3D"
			},
			{
				en: "Color",
				zh: "調色"
			}
		],
		poster: "/media/posters/memories.jpg",
		video: "/media/works/memories.mp4",
		youtubeId: "VhZ4NuKOPDU"
	},
	{
		id: "ai-video",
		title: {
			en: "MainlandHeadwear",
			zh: "MainlandHeadwear"
		},
		client: {
			en: "corporate",
			zh: "corporate"
		},
		year: "2020",
		category: {
			en: "corporate video",
			zh: "corporate video"
		},
		roles: [
			{
				en: "Concept",
				zh: "概念"
			},
			{
				en: "Character",
				zh: "角色"
			},
			{
				en: "Execution",
				zh: "執行"
			}
		],
		poster: "/media/posters/ai-video.jpg",
		video: "/media/works/ai-video.mp4",
		youtubeId: "c1vcjeaO4f4"
	}
];
var useLocale = create((set) => ({
	locale: "en",
	setLocale: (locale) => set({ locale })
}));
function tx(locale, value) {
	if (typeof value === "string") return value;
	return value[locale];
}
var DURATION = 2600;
function Loader({ onDone }) {
	const locale = useLocale((s) => s.locale);
	const words = PROFILE.loaderWords[locale];
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [wordIndex, setWordIndex] = (0, import_react.useState)(0);
	const [visible, setVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVisible(false);
			onDone();
			return;
		}
		const start = performance.now();
		let raf = 0;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / DURATION);
			setProgress(Math.round(t * 100));
			if (t < 1) raf = requestAnimationFrame(tick);
			else setTimeout(() => {
				setVisible(false);
				setTimeout(onDone, 650);
			}, 120);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [onDone]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setWordIndex((i) => (i + 1) % words.length);
		}, 850);
		return () => window.clearInterval(id);
	}, [words.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[100] flex flex-col justify-between bg-bg px-6 py-8 text-fg md:px-12 md:py-12",
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			y: "-8%"
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					className: "kicker",
					initial: {
						opacity: 0,
						y: -16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .55,
						delay: .08
					},
					children: tx(locale, {
						en: "Portfolio",
						zh: "作品集"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					className: "kicker",
					initial: {
						opacity: 0,
						y: -16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .55,
						delay: .16
					},
					children: [tx(locale, PROFILE.location), " · 2026"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "title-heiti mb-6 text-center text-sm md:text-base",
					children: PROFILE.monogram
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-[4.5rem] overflow-hidden md:h-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "title-heiti text-5xl text-fg/85 md:text-7xl",
							initial: {
								y: 28,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							exit: {
								y: -28,
								opacity: 0
							},
							transition: {
								duration: .45,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: words[wordIndex]
						}, `${locale}-${words[wordIndex]}`)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kicker",
					children: tx(locale, {
						en: "Loading",
						zh: "載入中"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "title-heiti text-4xl tabular-nums md:text-5xl",
					children: String(progress).padStart(2, "0")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-px w-full bg-stroke",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "loader-bar h-px bg-line",
					style: { width: `${progress}%` }
				})
			})] })
		]
	}) });
}
function Contact() {
	const locale = useLocale((s) => s.locale);
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker mb-4",
					children: ["03 — ", tx(locale, {
						en: "Contact",
						zh: "聯絡"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "title-heiti text-display",
					children: tx(locale, {
						en: "Let’s cut the next one",
						zh: "下一條，一起剪"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PROFILE.emailHref,
							className: "group rounded-xl border border-stroke p-6 text-center transition-colors duration-200 hover:border-fg/35",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker mb-4",
								children: tx(locale, {
									en: "Email",
									zh: "電郵"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center justify-center gap-3 text-lg text-fg",
								children: [PROFILE.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PROFILE.phoneHref,
							className: "group rounded-xl border border-stroke p-6 text-center transition-colors duration-200 hover:border-fg/35",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker mb-4",
								children: tx(locale, {
									en: "Phone",
									zh: "電話"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center justify-center gap-3 text-lg text-fg",
								children: [PROFILE.phoneDisplay, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PROFILE.youtubePlaylist,
							target: "_blank",
							rel: "noreferrer",
							className: "group rounded-xl border border-stroke p-6 text-center transition-colors duration-200 hover:border-fg/35",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker mb-4",
								children: "YouTube"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center justify-center gap-3 text-lg text-fg",
								children: [tx(locale, {
									en: "Full portfolio",
									zh: "完整作品"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-hidden rounded-xl bg-elevated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/contact-pig.png",
						alt: "",
						className: "aspect-video w-full object-cover object-center"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "border-t border-stroke px-5 py-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "kicker text-center",
				children: ["Tang Chin Hong ", year]
			})
		})]
	});
}
function youtubeIdFromUrl(input) {
	const raw = input.trim();
	if (!raw) return null;
	if (/^[\w-]{11}$/.test(raw)) return raw;
	try {
		const url = new URL(raw);
		const host = url.hostname.replace(/^www\./, "");
		if (host === "youtu.be") {
			const id = url.pathname.split("/").filter(Boolean)[0];
			return id && /^[\w-]{11}$/.test(id) ? id : null;
		}
		if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
			const v = url.searchParams.get("v");
			if (v && /^[\w-]{11}$/.test(v)) return v;
			const parts = url.pathname.split("/").filter(Boolean);
			const flag = parts[0];
			const next = parts[1];
			if ((flag === "embed" || flag === "shorts" || flag === "live") && next && /^[\w-]{11}$/.test(next)) return next;
		}
	} catch {
		return null;
	}
	return null;
}
function driveIdFromUrl(input) {
	const raw = input.trim();
	if (!raw) return null;
	const file = raw.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
	if (file?.[1]) return file[1];
	try {
		const id = new URL(raw).searchParams.get("id");
		if (id && id.length > 10) return id;
	} catch {
		return null;
	}
	return null;
}
function classifyUrl(input) {
	const raw = input.trim();
	if (!raw) return null;
	const yt = youtubeIdFromUrl(raw);
	if (yt) return {
		kind: "youtube",
		youtubeId: yt,
		href: `https://www.youtube.com/watch?v=${yt}`
	};
	const gd = driveIdFromUrl(raw);
	if (gd) return {
		kind: "drive",
		driveId: gd,
		href: `https://drive.google.com/file/d/${gd}/view`
	};
	if (/^https?:\/\//i.test(raw)) return {
		kind: "file",
		href: raw
	};
	return null;
}
function youtubePoster(id) {
	return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
function youtubeEmbed(id, opts) {
	const params = new URLSearchParams({
		rel: "0",
		modestbranding: "1",
		playsinline: "1"
	});
	if (opts?.autoplay) params.set("autoplay", "1");
	if (opts?.bg) {
		params.set("autoplay", "1");
		params.set("mute", "1");
		params.set("controls", "0");
		params.set("loop", "1");
		params.set("playlist", id);
	}
	return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}
function drivePreview(id) {
	return `https://drive.google.com/file/d/${id}/preview`;
}
function driveImage(id) {
	return `https://lh3.googleusercontent.com/d/${id}=w1920`;
}
var DB_NAME = "tch-portfolio-media-v2";
var STORE = "files";
var META_KEY = "tch-media-meta-v3";
var MAX_VIDEO = 75497472;
var MAX_IMAGE = 10485760;
function defaultClips() {
	return Object.fromEntries(PROJECTS.map((p) => [p.id, {
		poster: youtubePoster(p.youtubeId),
		video: `https://www.youtube.com/watch?v=${p.youtubeId}`,
		kind: "youtube",
		youtubeId: p.youtubeId
	}]));
}
function defaultHero() {
	return {
		poster: "/media/posters/hero.jpg",
		video: "/media/hero.mp4",
		kind: "file"
	};
}
function readMeta() {
	try {
		const raw = localStorage.getItem(META_KEY);
		if (!raw) return { clips: {} };
		const parsed = JSON.parse(raw);
		return {
			clips: parsed.clips ?? {},
			hero: parsed.hero,
			portraitHref: parsed.portraitHref
		};
	} catch {
		return { clips: {} };
	}
}
function writeMeta(meta) {
	localStorage.setItem(META_KEY, JSON.stringify(meta));
}
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, 1);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
async function idbGet(key) {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readonly").objectStore(STORE).get(key);
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
async function idbPut(key, blob) {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction(STORE, "readwrite");
		tx.objectStore(STORE).put(blob, key);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
}
async function idbDel(key) {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction(STORE, "readwrite");
		tx.objectStore(STORE).delete(key);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
}
function clipFromMeta(base, meta) {
	if (!meta) return { ...base };
	if (meta.kind === "youtube" && meta.youtubeId) return {
		poster: youtubePoster(meta.youtubeId),
		video: meta.href ?? `https://www.youtube.com/watch?v=${meta.youtubeId}`,
		kind: "youtube",
		youtubeId: meta.youtubeId
	};
	if (meta.kind === "drive" && meta.driveId) return {
		poster: driveImage(meta.driveId),
		video: meta.href ?? `https://drive.google.com/file/d/${meta.driveId}/view`,
		kind: "drive",
		driveId: meta.driveId
	};
	if (meta.href) return {
		poster: base.poster,
		video: meta.href,
		kind: "file"
	};
	return { ...base };
}
var useMediaStore = create((set, get) => ({
	ready: false,
	notice: null,
	hero: defaultHero(),
	portrait: "/media/portrait.jpg",
	clips: defaultClips(),
	setNotice: (notice) => set({ notice }),
	hydrate: async () => {
		if (typeof window === "undefined") return;
		const meta = readMeta();
		const clips = defaultClips();
		for (const project of PROJECTS) {
			const base = clips[project.id];
			let clip = clipFromMeta(base, meta.clips[project.id]);
			const posterBlob = await idbGet(`poster:${project.id}`).catch(() => void 0);
			const videoBlob = await idbGet(`video:${project.id}`).catch(() => void 0);
			if (posterBlob) clip = {
				...clip,
				poster: URL.createObjectURL(posterBlob)
			};
			if (videoBlob) clip = {
				...clip,
				video: URL.createObjectURL(videoBlob),
				kind: "file",
				youtubeId: void 0,
				driveId: void 0
			};
			clips[project.id] = clip;
		}
		let hero = clipFromMeta(defaultHero(), meta.hero);
		const heroPoster = await idbGet("hero-poster").catch(() => void 0);
		const heroVideo = await idbGet("hero-video").catch(() => void 0);
		if (heroPoster) hero = {
			...hero,
			poster: URL.createObjectURL(heroPoster)
		};
		if (heroVideo) hero = {
			...hero,
			video: URL.createObjectURL(heroVideo),
			kind: "file",
			youtubeId: void 0,
			driveId: void 0
		};
		let portrait = meta.portraitHref ?? "/media/portrait.jpg";
		const portraitBlob = await idbGet("portrait").catch(() => void 0);
		if (portraitBlob) portrait = URL.createObjectURL(portraitBlob);
		set({
			ready: true,
			clips,
			hero,
			portrait
		});
	},
	upload: async (slot, file) => {
		const isImage = file.type.startsWith("image/");
		const isVideo = file.type.startsWith("video/");
		if (!isImage && !isVideo) {
			set({ notice: "請選相片或影片檔。" });
			return;
		}
		if (isImage && file.size > MAX_IMAGE) {
			set({ notice: "相片請小於 10MB。" });
			return;
		}
		if (isVideo && file.size > MAX_VIDEO) {
			set({ notice: "影片請小於 72MB，或改貼 YouTube / Drive 連結。" });
			return;
		}
		const url = URL.createObjectURL(file);
		await idbPut(slot, file);
		const meta = readMeta();
		if (slot === "portrait") {
			delete meta.portraitHref;
			writeMeta(meta);
			set({
				portrait: url,
				notice: "已換頭像。"
			});
			return;
		}
		if (slot === "hero-poster") {
			set({
				hero: {
					...get().hero,
					poster: url
				},
				notice: "已換封面。"
			});
			return;
		}
		if (slot === "hero-video") {
			delete meta.hero;
			writeMeta(meta);
			set({
				hero: {
					...get().hero,
					video: url,
					kind: "file",
					youtubeId: void 0,
					driveId: void 0
				},
				notice: "已換主視覺影片。"
			});
			return;
		}
		const posterMatch = slot.match(/^poster:(.+)$/);
		const videoMatch = slot.match(/^video:(.+)$/);
		const id = posterMatch?.[1] ?? videoMatch?.[1];
		if (!id) return;
		const prev = get().clips[id] ?? defaultClips()[id];
		if (posterMatch) {
			set({
				clips: {
					...get().clips,
					[id]: {
						...prev,
						poster: url
					}
				},
				notice: "已換封面。"
			});
			return;
		}
		if (videoMatch) {
			if (meta.clips[id]) delete meta.clips[id];
			writeMeta(meta);
			set({
				clips: {
					...get().clips,
					[id]: {
						...prev,
						video: url,
						kind: "file",
						youtubeId: void 0,
						driveId: void 0
					}
				},
				notice: "已換影片。"
			});
		}
	},
	pasteUrl: (slot, url) => {
		const parsed = classifyUrl(url);
		if (!parsed) {
			set({ notice: "請貼 YouTube、Google Drive，或直接檔案網址。" });
			return;
		}
		const meta = readMeta();
		if (slot === "hero") {
			meta.hero = parsed;
			idbDel("hero-video");
			writeMeta(meta);
			set({
				hero: clipFromMeta(defaultHero(), parsed),
				notice: "已套用連結。"
			});
			return;
		}
		if (slot === "portrait") {
			if (parsed.kind === "youtube") {
				set({ notice: "頭像請用相片或 Google Drive 圖片連結。" });
				return;
			}
			const href = parsed.kind === "drive" && parsed.driveId ? driveImage(parsed.driveId) : parsed.href;
			meta.portraitHref = href;
			idbDel("portrait");
			writeMeta(meta);
			set({
				portrait: href,
				notice: "已換頭像。"
			});
			return;
		}
		const base = defaultClips()[slot];
		if (!base) return;
		meta.clips[slot] = parsed;
		idbDel(`video:${slot}`);
		writeMeta(meta);
		const next = clipFromMeta(base, parsed);
		const prev = get().clips[slot] ?? base;
		set({
			clips: {
				...get().clips,
				[slot]: {
					...next,
					poster: prev.poster.startsWith("blob:") ? prev.poster : next.poster
				}
			},
			notice: "已套用連結。"
		});
	},
	reset: async (slot) => {
		const meta = readMeta();
		if (slot === "hero") {
			delete meta.hero;
			await idbDel("hero-video");
			await idbDel("hero-poster");
			writeMeta(meta);
			set({
				hero: defaultHero(),
				notice: "已還原主視覺。"
			});
			return;
		}
		if (slot === "portrait") {
			delete meta.portraitHref;
			await idbDel("portrait");
			writeMeta(meta);
			set({
				portrait: "/media/portrait.jpg",
				notice: "已還原頭像。"
			});
			return;
		}
		delete meta.clips[slot];
		await idbDel(`video:${slot}`);
		await idbDel(`poster:${slot}`);
		writeMeta(meta);
		const base = defaultClips()[slot];
		if (!base) return;
		set({
			clips: {
				...get().clips,
				[slot]: base
			},
			notice: "已還原。"
		});
	}
}));
function useProjectClips() {
	const clips = useMediaStore((s) => s.clips);
	return PROJECTS.map((project) => {
		const clip = clips[project.id];
		return clip ? {
			...project,
			...clip
		} : project;
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function MediaFrame({ clip, className, mode = "play", autoPlay = false, muted = true, loop = false, controls = false }) {
	if (mode === "poster" || clip.kind !== "file" && mode === "cover") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: clip.poster,
		alt: "",
		className: cn("h-full w-full object-cover", className)
	});
	if (clip.kind === "youtube" && clip.youtubeId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-full w-full overflow-hidden", mode === "cover" && "absolute inset-0"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: "YouTube",
			src: youtubeEmbed(clip.youtubeId, {
				bg: mode === "cover",
				autoplay: autoPlay || mode === "cover"
			}),
			className: cn("h-full w-full border-0", mode === "cover" && "pointer-events-none scale-150", className),
			allow: "autoplay; encrypted-media; picture-in-picture",
			allowFullScreen: mode !== "cover"
		})
	});
	if (clip.kind === "drive" && clip.driveId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		title: "Google Drive",
		src: drivePreview(clip.driveId),
		className: cn("h-full w-full border-0", mode === "cover" && "pointer-events-none", className),
		allow: "autoplay"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		className: cn("h-full w-full object-cover", className),
		src: clip.video,
		poster: clip.poster,
		autoPlay,
		muted,
		loop,
		controls,
		playsInline: true,
		preload: mode === "cover" ? "auto" : "metadata"
	});
}
function Hero({ armed }) {
	const locale = useLocale((s) => s.locale);
	const hero = useMediaStore((s) => s.hero);
	const root = (0, import_react.useRef)(null);
	const cluster = (0, import_react.useRef)(null);
	const kickerRef = (0, import_react.useRef)(null);
	const nameRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const fit = () => {
			const box = cluster.current;
			const kicker = kickerRef.current;
			const name = nameRef.current;
			if (!box || !kicker || !name) return;
			box.style.transform = "";
			name.style.fontSize = "1px";
			const target = kicker.scrollWidth;
			name.style.fontSize = "80px";
			const nameW = name.scrollWidth;
			if (target > 0 && nameW > 0) name.style.fontSize = `${80 * target / nameW}px`;
			const parent = box.parentElement;
			if (!parent) return;
			const avail = parent.clientWidth;
			const need = box.scrollWidth;
			if (need > avail && need > 0) box.style.transform = `scale(${avail / need})`;
		};
		fit();
		document.fonts.ready.then(fit);
		window.addEventListener("resize", fit);
		return () => window.removeEventListener("resize", fit);
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (!armed || !root.current) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const ctx = gsapWithCSS.context(() => {
			if (reduced) {
				gsapWithCSS.set(".hero-reveal", {
					opacity: 1,
					y: 0
				});
				return;
			}
			gsapWithCSS.set(".hero-reveal", {
				opacity: 0,
				y: 32
			});
			const tl = gsapWithCSS.timeline({ defaults: { ease: "power3.out" } });
			tl.to(".hero-kicker", {
				opacity: 1,
				y: 0,
				duration: .8
			}, .05);
			tl.to(".hero-name", {
				opacity: 1,
				y: 0,
				duration: 1.05
			}, .12);
			tl.to(".hero-role", {
				opacity: 1,
				y: 0,
				duration: .8
			}, .28);
			tl.to(".hero-scroll", {
				opacity: 1,
				y: 0,
				duration: .75
			}, .4);
		}, root);
		return () => ctx.revert();
	}, [armed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		id: "top",
		className: "relative isolate h-dvh min-h-[36rem] overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
				clip: hero,
				mode: "cover",
				autoPlay: true,
				muted: true,
				loop: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-24 md:px-8 md:pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: cluster,
					className: "w-max origin-bottom-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						ref: kickerRef,
						className: "hero-reveal hero-kicker kicker mb-5 w-fit whitespace-nowrap",
						children: tx(locale, PROFILE.kicker)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						ref: nameRef,
						className: "hero-reveal hero-name title-heiti w-fit whitespace-nowrap text-fg",
						children: "Tang Chin Hong"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-reveal hero-role mt-6 max-w-md text-base font-light leading-snug text-fg/90 md:mt-8 md:text-xl",
					children: tx(locale, PROFILE.role)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-reveal hero-scroll mt-6 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-10 w-px bg-stroke",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "scroll-dot absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-line" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker",
						children: tx(locale, {
							en: "Scroll",
							zh: "下滑"
						})
					})]
				})
			]
		})]
	});
}
function useInViewPlay(enabled) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || !enabled) return;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry) return;
			if (entry.isIntersecting) el.play().catch(() => {});
			else el.pause();
		}, { threshold: .45 });
		io.observe(el);
		return () => io.disconnect();
	}, [enabled]);
	return ref;
}
function asClip(project) {
	return {
		poster: project.poster,
		video: project.video,
		kind: project.kind ?? "file",
		youtubeId: project.youtubeId,
		driveId: project.driveId
	};
}
function WorkCard({ project, index, onOpen }) {
	const locale = useLocale((s) => s.locale);
	const clip = asClip(project);
	const isFile = clip.kind === "file";
	const videoRef = useInViewPlay(isFile);
	const [hover, setHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "group relative w-[86vw] shrink-0 snap-center sm:w-[70vw] lg:w-[58vw]",
		onMouseEnter: () => setHover(true),
		onMouseLeave: () => setHover(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"data-cursor": "hover",
			onClick: () => onOpen(project),
			className: "relative block aspect-video w-full overflow-hidden rounded-xl bg-elevated text-left",
			"aria-label": tx(locale, project.title),
			children: [
				isFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
					muted: true,
					loop: true,
					playsInline: true,
					preload: "metadata",
					poster: clip.poster,
					src: clip.video
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					clip,
					mode: "poster",
					className: "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-4 top-4 flex items-center gap-2 md:left-6 md:top-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker text-fg/80",
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker text-muted",
						children: tx(locale, project.category)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-fg/25 bg-bg/30 text-fg backdrop-blur-sm transition-transform duration-200 md:right-6 md:top-6", hover ? "scale-100" : "scale-90"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-fg" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-4 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "title-heiti text-2xl text-fg md:text-4xl",
						children: tx(locale, project.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							tx(locale, project.client),
							" · ",
							project.year
						]
					})]
				})
			]
		})
	});
}
function Showreel() {
	const locale = useLocale((s) => s.locale);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reel",
		className: "mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 md:mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker mb-4",
				children: "01 — Showreel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "title-heiti text-display",
				children: tx(locale, {
					en: "Watch the reel",
					zh: "睇 Showreel"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video bg-bg",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Showreel",
					src: youtubeEmbed(SHOWREEL.youtubeId, { autoplay: true }),
					className: "h-full w-full border-0",
					allow: "autoplay; encrypted-media; picture-in-picture",
					allowFullScreen: true
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setPlaying(true),
					className: "group relative h-full w-full",
					"aria-label": tx(locale, {
						en: "Play showreel",
						zh: "播放 Showreel"
					}),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `https://i.ytimg.com/vi/${SHOWREEL.youtubeId}/maxresdefault.jpg`,
							alt: "",
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-bg/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fg/30 bg-bg/55 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105 md:size-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-6 fill-fg text-fg md:size-7" })
						})
					]
				})
			})
		})]
	});
}
function VideoModal({ project, onClose }) {
	const locale = useLocale((s) => s.locale);
	(0, import_react.useEffect)(() => {
		if (!project) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [project, onClose]);
	const clip = project ? asClip(project) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: project && clip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-bg/92 p-4 backdrop-blur-md md:p-10",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .25 },
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "relative w-full max-w-5xl overflow-hidden rounded-xl bg-elevated",
			initial: {
				opacity: 0,
				y: 18,
				scale: .98
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 12,
				scale: .98
			},
			transition: {
				duration: .35,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-bg/70 text-fg backdrop-blur-sm",
					"aria-label": tx(locale, {
						en: "Close",
						zh: "關閉"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						clip,
						mode: "play",
						autoPlay: true,
						muted: false,
						controls: clip.kind === "file"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 px-5 py-5 md:flex-row md:items-end md:justify-between md:px-7 md:py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker mb-2",
							children: tx(locale, project.category)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "title-heiti text-3xl md:text-4xl",
							children: tx(locale, project.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								tx(locale, project.client),
								" · ",
								project.year
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: project.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-stroke px-3 py-1.5 text-xs tracking-wide text-muted",
							children: tx(locale, role)
						}, role.en))
					})]
				})
			]
		})
	}) });
}
function Work() {
	const locale = useLocale((s) => s.locale);
	const projects = useProjectClips();
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "relative overflow-hidden pt-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-10 max-w-7xl px-5 md:mb-14 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker mb-4",
					children: ["02 — ", tx(locale, {
						en: "Selected Work",
						zh: "精選作品"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "title-heiti text-display",
					children: tx(locale, {
						en: "Frames that hold",
						zh: "留得住的畫面"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[6vw] pb-8 md:gap-5",
				children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkCard, {
					project,
					index: i,
					onOpen: setActive
				}, `${project.id}-${project.video}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {
				project: active,
				onClose: () => setActive(null)
			})
		]
	});
}
function SmoothScroll({ enabled }) {
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.1,
			smoothWheel: true
		});
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, [enabled]);
	return null;
}
function FilmGrain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "film-grain",
		"aria-hidden": "true"
	});
}
function Cursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		document.documentElement.classList.add("max-md:cursor-auto");
		const onMove = (e) => {
			if (dot.current) dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
			if (ring.current) ring.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
		};
		const onOver = (e) => {
			const hoverable = e.target?.closest("a, button, [data-cursor='hover']");
			ring.current?.classList.toggle("is-hover", Boolean(hoverable));
		};
		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseover", onOver);
		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseover", onOver);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		className: "cursor-dot hidden md:block"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ring,
		className: "cursor-ring hidden md:block"
	})] });
}
function Nav({ visible }) {
	const locale = useLocale((s) => s.locale);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300", scrolled ? "border-b border-stroke/80 bg-bg/80 backdrop-blur-md" : "border-b border-transparent bg-transparent", visible ? "opacity-100" : "pointer-events-none opacity-0"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "title-heiti shrink-0 text-sm text-fg",
				children: "Portfolio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hide-scrollbar flex items-center gap-0.5 overflow-x-auto md:gap-2",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${item.id}`,
					className: "kicker px-2 py-2 text-muted transition-colors duration-200 hover:text-fg md:px-3",
					children: tx(locale, item.label)
				}, item.id))
			})]
		})
	});
}
function Home() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const onDone = (0, import_react.useCallback)(() => setReady(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { onDone }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { enabled: ready }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { visible: ready }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { armed: ready }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showreel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] })
		]
	});
}
//#endregion
export { Home as component };
