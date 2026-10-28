/* Reads content.js and builds the page. You normally never edit this file. */
const $ = (id) => document.getElementById(id);
function el(tag, props = {}, kids = []) {
  const n = Object.assign(document.createElement(tag), props);
  kids.forEach((k) => n.append(k));
  return n;
}

/* ---- Basic text ---- */
document.title = SITE.name + " | " + SITE.role;
$("logo").textContent = SITE.name;
$("headline").textContent = SITE.headline;
$("about").textContent = SITE.about;
$("role").textContent = SITE.role;
const photo = $("photo");
photo.src = SITE.photo;
photo.onerror = () => { photo.style.display = "none"; };   // hides if no picture yet

/* ---- Footer ---- */
$("footer").append(
  "© " + new Date().getFullYear() + " " + SITE.name + ". ",
  el("a", { href: "mailto:" + SITE.email, textContent: SITE.email }), " · ",
  el("a", { href: SITE.linkedin, textContent: "LinkedIn" }), " · ",
  el("a", { href: SITE.upwork, textContent: "Upwork" })
);

/* ---- Case studies with filter buttons ---- */
const cards = PROJECTS.map((p) => {
  const row = (label, value) => [el("dt", { textContent: label }), el("dd", { textContent: value })];
  const card = el("article", { className: "build" }, [
    ...(p.status === "sample" ? [el("span", { className: "tag", textContent: "Sample build, not a client project" })] : []),
    el("h3", { textContent: p.title }),
    el("p", { textContent: p.summary }),
    el("details", {}, [
      el("summary", { textContent: "Read the details" }),
      el("dl", {}, [
        ...row("Problem", p.problem), ...row("Solution", p.solution),
        ...row("Tools", p.tools.join(", ")), ...row("Results", p.results)
      ])
    ])
  ]);
  card.dataset.tags = p.tags.join("|");
  $("projects").append(card);
  return card;
});

const allTags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];
allTags.forEach((tag) => {
  const b = el("button", { className: "chip", type: "button", textContent: tag });
  b.setAttribute("aria-pressed", tag === "All");
  b.onclick = () => {
    $("filters").querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
    cards.forEach((c) => { c.hidden = tag !== "All" && !c.dataset.tags.split("|").includes(tag); });
  };
  $("filters").append(b);
});

/* ---- Demo video ---- */
if (VIDEO.url) {
  $("video-title").textContent = VIDEO.title;
  const isFile = /\.(mp4|webm)$/i.test(VIDEO.url);
  $("video-box").append(isFile
    ? el("video", { src: VIDEO.url, controls: true, preload: "metadata" })
    : el("iframe", { src: VIDEO.url, title: VIDEO.title, loading: "lazy", allowFullscreen: true }));
} else {
  $("video").remove();
  $("nav-video").remove();
}

/* ---- Time-saved calculator ---- */
function calc() {
  const hours = (Number($("c-count").value) * Number($("c-min").value) * 52) / 60;
  $("c-out").textContent = hours > 0
    ? "About " + Math.round(hours) + " hours a year (" + Math.round(hours / 12) + " a month)."
    : "Enter both numbers to see an estimate.";
}
["c-count", "c-min"].forEach((id) => $(id).addEventListener("input", calc));
calc();

/* ---- Form: sends to Netlify without leaving the page ---- */
$("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = $("form-status");
  status.textContent = "Sending...";
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(e.target)).toString()
    });
    if (!res.ok) throw new Error();
    e.target.reset();
    status.textContent = "Thanks, your message was sent. I will reply by email.";
  } catch {
    status.textContent = "Something went wrong. Please email " + SITE.email + " instead.";
  }
});
