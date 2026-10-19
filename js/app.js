"use strict";

const STORAGE_KEY = "smartlink-platform";

const PLATFORM_ORDER = [
  "spotify",
  "apple",
  "youtubeMusic",
  "youtube",
  "amazon",
  "deezer",
  "tidal",
  "soundcloud",
  "bandcamp",
  "audiomack",
  "pandora",
  "itunes",
];

const DEVICE_PREFS = {
  ios: ["apple", "spotify", "youtubeMusic", "itunes"],
  android: ["spotify", "youtubeMusic", "youtube", "apple"],
};

function svg(body) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
}

const ICONS = {
  spotify: svg(
    `<path d="M6.2 10.5C9 6.3 15.1 6.5 18.3 11M7 13.3C9.4 10 14.4 10.2 17.2 13.6M8 15.9C9.8 13.7 13.6 13.8 16 16.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`
  ),
  apple: svg(
    `<path fill="currentColor" d="M16.1 12.5c0-2.1 1.7-3.1 1.8-3.2-1-.1-2.5-1.6-3.2-1.6-.7 0-1.6.8-2.6.8-.9 0-1.8-.8-2.9-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.8.7 1.8-1 2.5-2c.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.4-.9-2.4-3.6z"/><path fill="currentColor" d="M14.6 6.5c.6-.7 1-1.7.9-2.7-1 .1-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.3z"/>`
  ),
  youtube: svg(
    `<rect x="3" y="6.5" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M11 9.4v5.2l4.4-2.6z" fill="currentColor"/>`
  ),
  youtubeMusic: svg(
    `<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M10.4 9.2 15.2 12l-4.8 2.8z" fill="currentColor"/>`
  ),
  amazon: svg(
    `<path d="M5 14.2c2.3 2.2 4.8 3.2 7 3.2s4.8-1 7.1-3.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16.6 13.2c.9.6 2 .3 2.6-.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`
  ),
  deezer: svg(
    `<path fill="currentColor" d="M4 15h3.2v3.2H4zM9 12h3.2v6.2H9zM14 8.2h3.2V18H14zM19 5h1.8v13H19z"/>`
  ),
  tidal: svg(`<path fill="currentColor" d="M12 3.2 20.2 12 12 20.8 3.8 12z"/>`),
  soundcloud: svg(
    `<path fill="currentColor" d="M8.2 17.6h8.5a3.2 3.2 0 0 0 .2-6.4 4.8 4.8 0 0 0-9.1-.8 3.2 3.2 0 0 0 .4 7.2z"/>`
  ),
  bandcamp: `<svg class="is-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="12" fill="#1DA0C3"/><path fill="#fff" d="M9.66 8.25h8.67L14.3 15.7H5.62z"/></svg>`,
  bandcampMark: svg(`<path fill="currentColor" d="M8.7 6.7h12.28L15.27 17.25H2.98z"/>`),
  audiomack: svg(
    `<path d="M5 12v3.2a3 3 0 0 0 3 3h.2M19 12v3.2a3 3 0 0 1-3 3h-.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5 12V10a7 7 0 0 1 14 0v2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`
  ),
  pandora: svg(
    `<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 7.5h3.1a2.6 2.6 0 0 1 0 5.2H10zM10 12.7V17" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`
  ),
  itunes: svg(
    `<circle cx="8.2" cy="16.4" r="2.3" fill="currentColor"/><circle cx="16.6" cy="14.8" r="2.3" fill="currentColor"/><path d="M10.4 16.2V6.4l8.4-1.7v9.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`
  ),
  link: svg(
    `<path d="M10 14 14 10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M11 7.5H8.8A3.3 3.3 0 0 0 8.8 14H11M13 16.5h2.2a3.3 3.3 0 0 0 0-6.6H13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`
  ),
  chevron: svg(
    `<path d="M9 6.5 14.5 12 9 17.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`
  ),
  instagram: svg(
    `<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.3" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.7" cy="7.4" r="0.9" fill="currentColor"/>`
  ),
  tiktok: svg(
    `<path fill="currentColor" d="M14 4.2c.5 2.4 1.9 3.8 4.2 4v2.2c-1.5 0-2.8-.4-4-1.2v5.6a4.6 4.6 0 1 1-4.6-4.6c.3 0 .6 0 .8.1v2.4a2.3 2.3 0 1 0 1.6 2.2V4.2H14z"/>`
  ),
  x: svg(
    `<path d="M6 6.5 18 17.5M18 6.5 6 17.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`
  ),
  facebook: svg(
    `<path fill="currentColor" d="M14 8.2h2.1V5.2H14c-2.2 0-3.8 1.7-3.8 3.9v1.7H8v2.8h2.2V19h2.8v-5.4h2.2l.6-2.8h-2.8V9.2c0-.6.4-1 1-1z"/>`
  ),
  website: svg(
    `<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 12h16M12 4c2.1 2.3 3.2 4.8 3.2 8s-1.1 5.7-3.2 8c-2.1-2.3-3.2-4.8-3.2-8s1.1-5.7 3.2-8z" fill="none" stroke="currentColor" stroke-width="1.4"/>`
  ),
};

const PLATFORMS = {
  spotify: { label: "Spotify", brand: "#1DB954", ink: "#06210f", icon: ICONS.spotify },
  apple: { label: "Apple Music", brand: "#FA233B", ink: "#fff", icon: ICONS.apple },
  youtubeMusic: { label: "YouTube Music", brand: "#FF0033", ink: "#fff", icon: ICONS.youtubeMusic },
  youtube: { label: "YouTube", brand: "#FF0033", ink: "#fff", icon: ICONS.youtube },
  amazon: { label: "Amazon Music", brand: "#25D1DA", ink: "#062326", icon: ICONS.amazon },
  deezer: { label: "Deezer", brand: "#A238FF", ink: "#fff", icon: ICONS.deezer },
  tidal: { label: "TIDAL", brand: "#ffffff", ink: "#111111", icon: ICONS.tidal },
  soundcloud: { label: "SoundCloud", brand: "#FF5500", ink: "#fff", icon: ICONS.soundcloud },
  bandcamp: { label: "Bandcamp", brand: "#1DA0C3", ink: "#fff", icon: ICONS.bandcamp },
  audiomack: { label: "Audiomack", brand: "#FFA200", ink: "#1a120c", icon: ICONS.audiomack },
  pandora: { label: "Pandora", brand: "#3668FF", ink: "#fff", icon: ICONS.pandora },
  itunes: { label: "iTunes", brand: "#FB5BC5", ink: "#1a120c", icon: ICONS.itunes },
};

const SOCIALS = {
  instagram: { label: "Instagram", icon: ICONS.instagram },
  tiktok: { label: "TikTok", icon: ICONS.tiktok },
  x: { label: "X", icon: ICONS.x },
  youtube: { label: "YouTube", icon: ICONS.youtube },
  spotify: { label: "Spotify", icon: ICONS.spotify },
  bandcamp: { label: "Bandcamp", icon: ICONS.bandcampMark },
  soundcloud: { label: "SoundCloud", icon: ICONS.soundcloud },
  facebook: { label: "Facebook", icon: ICONS.facebook },
  apple: { label: "Apple Music", icon: ICONS.apple },
  website: { label: "Website", icon: ICONS.website },
};

const $ = (id) => document.getElementById(id);

const els = {
  home: $("home"),
  tagline: $("tagline"),
  share: $("share"),
  cover: $("cover"),
  fallback: $("cover-fallback"),
  kicker: $("kicker"),
  title: $("title"),
  byline: $("byline"),
  blurb: $("blurb"),
  when: $("when"),
  countdown: $("countdown"),
  days: $("cd-days"),
  hours: $("cd-hours"),
  mins: $("cd-mins"),
  secs: $("cd-secs"),
  links: $("links"),
  tracks: $("tracks"),
  trackSummary: $("track-summary"),
  trackList: $("track-list"),
  catalogSection: $("catalog-section"),
  catalog: $("catalog"),
  bio: $("bio"),
  socials: $("socials"),
  colophon: $("colophon"),
  toast: $("toast"),
};

let site = null;
let releases = [];
let paintedSlug = "";
let clock = 0;
let toastTimer = 0;
let booted = false;

function isHttp(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value.trim());
}

function hasValidDate(release) {
  const value = String(release.releaseDate || "").trim();
  if (!value) return false;
  if (/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value)) return true;
  return !Number.isNaN(new Date(value).getTime());
}

function startOfRelease(release) {
  const value = String(release.releaseDate || "").trim();
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (dateOnly) {
    return new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]));
  }
  return new Date(value);
}

function isUpcoming(release) {
  return hasValidDate(release) && startOfRelease(release).getTime() > Date.now();
}

function formatDate(date) {
  return new Intl.DateTimeFormat(site.locale || "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function typeLabel(type) {
  const labels = { single: "Single", album: "Album", ep: "EP" };
  return labels[String(type || "").toLowerCase()] || "Release";
}

function currentHash() {
  const raw = location.hash.replace(/^#/, "");
  try {
    return decodeURIComponent(raw);
  } catch (error) {
    return raw;
  }
}

function resolveSelected() {
  const slug = currentHash();
  if (slug) {
    const match = releases.find((release) => release.slug === slug);
    if (match) return match;
  }
  return releases.find((release) => release.featured) || releases[0];
}

function setMeta(attr, key, value) {
  const node = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (node) node.setAttribute("content", value);
}

function describe(release) {
  const blurb = release.blurb ? `${release.blurb} ` : "";
  if (!hasValidDate(release)) return `${blurb}${site.artist}.`.trim();
  const when = formatDate(startOfRelease(release));
  const status = isUpcoming(release) ? `Out ${when}.` : `Released ${when}.`;
  return `${blurb}${status} ${site.artist}.`;
}

function detectDevice() {
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

function pickPreferred(available) {
  let saved = "";
  try {
    saved = localStorage.getItem(STORAGE_KEY) || "";
  } catch (error) {
    saved = "";
  }
  if (saved && available.includes(saved)) return { id: saved, reason: "saved" };

  const device = detectDevice();
  const prefs = DEVICE_PREFS[device] || [];
  const match = prefs.find((id) => available.includes(id));
  if (match) return { id: match, reason: "device" };
  return { id: available[0], reason: null };
}

function kickerFor(upcoming, primary, reason) {
  if (!primary) return upcoming ? "Pre-save" : "";
  if (upcoming && reason) return "Pre-save · For this device";
  if (upcoming) return "Pre-save";
  if (reason === "saved") return "Last used";
  if (reason === "device") return "For this device";
  return "";
}

function rememberPlatform(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch (error) {
    /* Private browsing can block storage. The link still opens. */
  }
}

function makeLink({ href, label, icon, brand, ink, primary, kicker, platform, release }) {
  const anchor = document.createElement("a");
  anchor.className = primary ? "link is-primary" : "link";
  anchor.href = href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.dataset.platform = platform;
  anchor.dataset.release = release;

  const badge = document.createElement("span");
  badge.className = "link-icon";
  badge.style.background = brand;
  badge.style.color = ink;
  badge.innerHTML = icon;
  if (badge.querySelector(".is-logo")) {
    badge.classList.add("is-logo");
    badge.style.background = "transparent";
    badge.style.boxShadow = "none";
  }

  const text = document.createElement("span");
  text.className = "link-copy";
  if (kicker) {
    const eyebrow = document.createElement("span");
    eyebrow.className = "link-kicker";
    eyebrow.textContent = kicker;
    text.append(eyebrow);
  }
  const name = document.createElement("span");
  name.className = "link-name";
  name.textContent = label;
  text.append(name);

  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.setAttribute("aria-hidden", "true");
  chevron.innerHTML = ICONS.chevron;

  anchor.append(badge, text, chevron);
  if (platform) {
    anchor.addEventListener("click", () => rememberPlatform(platform));
  }
  return anchor;
}

function paintLinks(release) {
  els.links.replaceChildren();
  const available = PLATFORM_ORDER.filter((id) => isHttp(release.links?.[id]));
  const extras = Array.isArray(release.extra)
    ? release.extra.filter((item) => item && item.label && isHttp(item.url))
    : [];
  const upcoming = isUpcoming(release);

  if (!available.length && !extras.length) {
    const note = document.createElement("p");
    note.className = "empty-links";
    note.textContent = upcoming
      ? "Listening links open on release day."
      : "Listening links are on the way.";
    els.links.append(note);
    return;
  }

  if (available.length) {
    const preferred = pickPreferred(available);
    const ordered = [preferred.id, ...available.filter((id) => id !== preferred.id)];
    ordered.forEach((id, index) => {
      const platform = PLATFORMS[id];
      const primary = index === 0;
      els.links.append(
        makeLink({
          href: release.links[id].trim(),
          label: platform.label,
          icon: platform.icon,
          brand: platform.brand,
          ink: platform.ink,
          primary,
          kicker: kickerFor(upcoming, primary, primary ? preferred.reason : null),
          platform: id,
          release: release.slug,
        })
      );
    });
  }

  extras.forEach((item) => {
    els.links.append(
      makeLink({
        href: item.url.trim(),
        label: item.label,
        icon: ICONS.link,
        brand: "var(--accent)",
        ink: "#1a120c",
        primary: false,
        kicker: upcoming ? "Pre-save" : "",
        platform: "",
        release: release.slug,
      })
    );
  });
}

function trackParts(track) {
  if (typeof track === "string") return { title: track, duration: "" };
  if (!track || typeof track !== "object") return { title: "", duration: "" };
  return {
    title: track.title || "",
    duration: track.duration || "",
  };
}

function paintTracks(release) {
  els.trackList.replaceChildren();
  const tracks = (Array.isArray(release.tracks) ? release.tracks : [])
    .map(trackParts)
    .filter((track) => track.title);
  if (!tracks.length) {
    els.tracks.hidden = true;
    els.tracks.open = false;
    return;
  }
  els.tracks.hidden = false;
  els.tracks.open = false;
  els.trackSummary.textContent = `Tracklist · ${tracks.length}`;
  tracks.forEach((track, index) => {
    const item = document.createElement("li");
    const num = document.createElement("span");
    num.className = "num";
    num.textContent = String(index + 1).padStart(2, "0");
    const name = document.createElement("span");
    name.textContent = track.title;
    item.append(num, name);
    if (track.duration) {
      const duration = document.createElement("span");
      duration.className = "duration";
      duration.textContent = track.duration;
      item.append(duration);
    }
    els.trackList.append(item);
  });
}

function catalogMeta(release) {
  const type = typeLabel(release.type);
  if (isUpcoming(release)) return `${type} · Pre-save`;
  if (!hasValidDate(release)) return type;
  return `${type} · ${startOfRelease(release).getFullYear()}`;
}

function paintCatalog(selected) {
  els.catalog.replaceChildren();
  if (releases.length < 2) {
    els.catalogSection.hidden = true;
    return;
  }
  els.catalogSection.hidden = false;
  const ordered = releases.slice().sort((a, b) => {
    const aTime = hasValidDate(a) ? startOfRelease(a).getTime() : 0;
    const bTime = hasValidDate(b) ? startOfRelease(b).getTime() : 0;
    return bTime - aTime;
  });

  ordered.forEach((release) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = release.slug === selected.slug ? "release-card is-active" : "release-card";
    button.style.setProperty("--card-accent", release.accent || site.accent || "#e07a45");
    if (release.slug === selected.slug) button.setAttribute("aria-current", "true");

    const thumb = document.createElement("span");
    thumb.className = "thumb";
    const image = document.createElement("img");
    image.alt = "";
    image.decoding = "async";
    image.loading = "lazy";
    image.width = 1280;
    image.height = 1280;
    if (release.cover) {
      image.addEventListener("error", () => {
        image.remove();
        thumb.classList.add("is-fallback");
      });
      image.src = release.cover;
      thumb.append(image);
    } else {
      thumb.classList.add("is-fallback");
    }

    const title = document.createElement("span");
    title.className = "release-card-title";
    title.textContent = release.title;
    const meta = document.createElement("span");
    meta.className = "release-card-meta";
    meta.textContent = catalogMeta(release);

    button.append(thumb, title, meta);
    button.addEventListener("click", () => {
      if (currentHash() === release.slug) {
        render({ scroll: true });
        return;
      }
      location.hash = release.slug;
    });
    item.append(button);
    els.catalog.append(item);
  });
}

function paintCover(release) {
  const accent = release.accent || site.accent || "#e07a45";
  els.fallback.textContent = release.title;
  if (!release.cover) {
    els.cover.hidden = true;
    els.cover.removeAttribute("src");
    els.fallback.hidden = false;
    return;
  }
  els.cover.hidden = false;
  els.cover.classList.remove("is-shown");
  els.fallback.hidden = true;
  els.cover.alt = `${release.title} cover art`;
  els.cover.onload = () => {
    els.cover.classList.add("is-shown");
    els.fallback.hidden = true;
  };
  els.cover.onerror = () => {
    els.cover.hidden = true;
    els.cover.alt = "";
    els.fallback.hidden = false;
  };
  els.cover.src = release.cover;
  if (els.cover.complete && els.cover.naturalWidth > 0) {
    els.cover.classList.add("is-shown");
  }
}

function paintRelease(release) {
  const accent = release.accent || site.accent || "#e07a45";
  const previous = document.documentElement.style.getPropertyValue("--accent").trim();
  if (previous && previous !== accent) {
    document.querySelector(".glow").classList.add("is-switching");
    window.setTimeout(() => document.querySelector(".glow").classList.remove("is-switching"), 220);
  }
  document.documentElement.style.setProperty("--accent", accent);

  const upcoming = isUpcoming(release);
  els.kicker.textContent = `${typeLabel(release.type)} · ${upcoming ? "Pre-save" : "Out now"}`;
  els.title.textContent = release.title;
  els.byline.textContent = site.artist;
  els.blurb.hidden = !release.blurb;
  els.blurb.textContent = release.blurb || "";
  if (hasValidDate(release)) {
    els.when.hidden = false;
    els.when.textContent = formatDate(startOfRelease(release));
  } else {
    els.when.hidden = true;
    els.when.textContent = "";
  }

  const pageTitle = `${release.title} — ${site.artist}`;
  const description = describe(release);
  document.title = pageTitle;
  setMeta("name", "description", description);
  setMeta("property", "og:title", pageTitle);
  setMeta("property", "og:description", release.blurb || description);
  setMeta("name", "twitter:title", pageTitle);
  setMeta("name", "twitter:description", release.blurb || description);
  setMeta("name", "theme-color", accent);

  paintCover(release);
  paintLinks(release);
  paintTracks(release);
  paintCatalog(release);
  paintedSlug = release.slug;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function syncCountdown(release) {
  window.clearInterval(clock);
  clock = 0;
  if (!isUpcoming(release)) {
    els.countdown.hidden = true;
    return;
  }

  const tick = () => {
    const remaining = startOfRelease(release).getTime() - Date.now();
    if (remaining <= 0) {
      window.clearInterval(clock);
      clock = 0;
      paintedSlug = "";
      render();
      return;
    }
    const totalSeconds = Math.floor(remaining / 1000);
    els.countdown.hidden = false;
    els.days.textContent = pad(Math.floor(totalSeconds / 86400));
    els.hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    els.mins.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    els.secs.textContent = pad(totalSeconds % 60);
  };

  tick();
  clock = window.setInterval(tick, 1000);
}

function scrollStage() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("stage").scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
  els.title.focus({ preventScroll: true });
}

function render(options = {}) {
  if (!releases.length) {
    showEmpty();
    return;
  }
  const release = resolveSelected();
  if (release.slug !== paintedSlug) paintRelease(release);
  syncCountdown(release);
  if (options.scroll) scrollStage();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

async function copyText(value) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }
  } catch (error) {
    /* Some browsers block the clipboard API. Try the older selection copy. */
  }
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.append(field);
  field.select();
  const ok = document.execCommand("copy");
  field.remove();
  if (!ok) throw new Error("copy failed");
}

async function onShare() {
  const release = releases.length ? resolveSelected() : null;
  const url = new URL(location.href);
  if (release) url.hash = release.slug;
  const payload = {
    title: release ? `${release.title} — ${site.artist}` : site.artist,
    text: release?.blurb || site.tagline || site.artist,
    url: url.toString(),
  };
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }
  try {
    await copyText(payload.url);
    showToast("Link copied");
  } catch (error) {
    showToast("Copy the link from the address bar");
  }
}

function paintProfile() {
  els.home.textContent = site.artist || "Music";
  els.tagline.hidden = !site.tagline;
  els.tagline.textContent = site.tagline || "";
  els.bio.hidden = !site.bio;
  els.bio.textContent = site.bio || "";
  els.colophon.textContent = `© ${new Date().getFullYear()} ${site.artist || ""}`.trim();
  els.socials.replaceChildren();
  const socials = Array.isArray(site.socials) ? site.socials : [];
  socials.forEach((item) => {
    if (!item || !isHttp(item.url)) return;
    const key = String(item.platform || "").toLowerCase();
    const known = SOCIALS[key];
    const anchor = document.createElement("a");
    anchor.href = item.url.trim();
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    if (known) {
      anchor.setAttribute("aria-label", item.label || known.label);
      anchor.innerHTML = known.icon;
    } else {
      anchor.classList.add("is-text");
      anchor.textContent = item.label || item.platform || "Link";
    }
    els.socials.append(anchor);
  });
  els.socials.hidden = els.socials.childElementCount === 0;
}

function showEmpty() {
  els.kicker.textContent = "";
  els.title.textContent = "No releases yet";
  els.byline.textContent = site.artist || "";
  els.blurb.hidden = false;
  els.blurb.textContent = "Add a release in data/releases.json and it will show up here.";
  els.when.hidden = true;
  els.countdown.hidden = true;
  els.links.replaceChildren();
  els.tracks.hidden = true;
  els.catalogSection.hidden = true;
  document.body.classList.remove("is-loading");
}

function showError() {
  document.body.classList.remove("is-loading");
  const main = document.querySelector("main");
  main.replaceChildren();
  const box = document.createElement("div");
  box.className = "error";
  const heading = document.createElement("h1");
  heading.textContent = "Releases couldn't be loaded.";
  const copy = document.createElement("p");
  copy.textContent =
    "Open this page through a local server, or publish it with GitHub Pages. Opening the file directly blocks the release data from loading.";
  box.append(heading, copy);
  main.append(box);
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeReleases(list) {
  const seen = new Set();
  return list.map((release, index) => {
    const next = { ...release };
    let slug = slugify(next.slug || next.title) || `release-${index + 1}`;
    while (seen.has(slug)) slug = `${slug}-2`;
    seen.add(slug);
    next.slug = slug;
    return next;
  });
}

async function loadJson(path) {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) throw new Error(`Couldn't read ${path}`);
  return response.json();
}

async function boot() {
  try {
    const [siteData, releaseData] = await Promise.all([
      loadJson("data/site.json"),
      loadJson("data/releases.json"),
    ]);
    if (!siteData || typeof siteData !== "object" || Array.isArray(siteData)) {
      throw new Error("site.json should be an object");
    }
    if (!Array.isArray(releaseData)) throw new Error("releases.json should be a list");
    site = siteData;
    releases = normalizeReleases(releaseData);
    paintProfile();
    render();
    document.body.classList.remove("is-loading");
    booted = true;
  } catch (error) {
    showError();
  }
}

els.share.addEventListener("click", onShare);
els.home.addEventListener("click", (event) => {
  event.preventDefault();
  const bare = `${location.pathname}${location.search}`;
  if (location.hash) history.pushState(null, "", bare);
  render({ scroll: true });
});
window.addEventListener("hashchange", () => {
  if (!booted) return;
  render({ scroll: true });
});
window.addEventListener("popstate", () => {
  if (!booted) return;
  render({ scroll: true });
});

boot();
