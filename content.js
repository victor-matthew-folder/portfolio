/* ============================================================
   EDIT THIS FILE to change your text, projects, photo and video.
   You never need to touch index.html, style.css or script.js.
   Keep the quotes "" and commas , exactly as they are.
   ============================================================ */

const SITE = {
  name: "Victor Matthew",
  role: "AI Automation Specialist and Automation Systems Consultant",
  headline: "I turn repetitive business work into workflows that run themselves.",
  about: "I start with your business problem, then choose the simplest tools that solve it: workflows, AI agents and app integrations. Based in Lagos, working with clients remotely.",
  photo: "photo.jpg",          // put your picture in the assets folder with this name
  email: "victormatthew333@gmail.com",           // EDIT
  linkedin: "https://www.linkedin.com/in/victor-matthew-it-ops",   // EDIT
  upwork: "https://www.upwork.com/freelancers/~01e98b7c39d2603ea1?mp_source=share" // EDIT
};

/* Demo video. Use ONE of these:
   - A YouTube embed link:  "https://www.youtube.com/embed/VIDEO_ID"
   - A Loom embed link:     "https://www.loom.com/embed/VIDEO_ID"
   - A file in assets:      "assets/demo.mp4"
   Leave url as "" to hide the video section. */
const VIDEO = {
  title: "Demo: how one of my workflows runs",
  url: "demo.mp4"
};

/* One block per project. Copy a whole { ... }, block to add another.
   status: "client" for real work, "sample" for demos (shows a label).
   tags are used by the filter buttons. */
const PROJECTS = [
  {
    title: "Lead intake to CRM follow-up",
    status: "sample",
    tags: ["CRM", "AI"],
    summary: "A web form submission is scored by an LLM, added to the CRM, and the lead gets a personalised first reply.",
    problem: "Describe the business problem here.",
    solution: "Form, webhook, AI scoring, CRM contact, follow-up sequence.",
    tools: ["n8n", "GoHighLevel", "LLM API"],
    results: "Real numbers only. For a sample, write what you would measure."
  },
  {
    title: "Invoice and document processing",
    status: "sample",
    tags: ["Documents", "AI"],
    summary: "Documents arrive by email, an LLM extracts the key fields and a record is created. Unclear items are flagged for a person.",
    problem: "Describe the business problem here.",
    solution: "Email attachment, field extraction, Airtable record, exception alert.",
    tools: ["Make.com", "Airtable", "LLM API"],
    results: "Real numbers only. For a sample, write what you would measure."
  }
];
