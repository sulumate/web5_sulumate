# Assignment 5 — JavaScript Basics

**Student:** Sulukhan Aizharykova  
**Group:** SE-2529

A small, responsive HTML/CSS/JavaScript website covering DOM manipulation and events. Each assignment part has a separate page linked through a shared navigation bar. This AI-assisted implementation was prepared for the instructor's requested comparison.

**Published website:** https://sulumate.github.io/web5_sulumate/  
**Repository:** https://github.com/sulumate/web5_sulumate

## Run locally

Download or clone the repository and open `index.html` in a browser. No build, packages, API keys or backend are required. All paths are relative, so the pages also work under the GitHub Pages repository path.

Alternatively, run `python3 -m http.server 8000` from the project directory and open http://localhost:8000.

## Tasks and demonstration

| Task | Page | Implementation | How to check |
| --- | --- | --- | --- |
| 0 — First script | `index.html` | External `assets/js/basics.js`, name and group in `console.log()`, exact greeting alert | Open the page, dismiss `Hello, JavaScript World!`, open Developer Tools → Console. The button repeats the alert. |
| 1 — Variables and operators | `index.html` | String, number, boolean, arithmetic and string concatenation | Read the console and visible output for types, `12 + 4`, subtraction, multiplication, division and remainder. |
| 2 — Changing content | `dom.html` | Button changes a paragraph with `textContent` | Click **Change text**. |
| 3 — Changing styles | `dom.html` | Separate buttons change a div's background and font size | Click both style buttons. Click again to restore. |
| 4 — Creating and removing elements | `dom.html` | `createElement("li")`, append and remove the last item | Click **Add Item** twice, then **Remove Item**. Removing is disabled when empty. |
| 5 — Mouse events | `events.html` | Explicit `mouseover` and `mouseout` listeners | Hover over the box; move away to restore its original color. |
| 6 — Keyboard events | `events.html` | Explicit `keyup` listener copies the current input value | Type, delete text and watch the output, including an empty value. |
| 7 — Calculator | `events.html` | Addition, subtraction, multiplication and division | Try `12` and `4` with each operation. Also try decimals, negatives, blank input and division by zero. |
| 8 — To-Do app | `todo.html` | Text input, Add Task, per-task Delete button, checkbox and strike-through; state in a temporary `tasks` array | Add two tasks, check/uncheck one, delete one and refresh. Tasks clear on refresh. Whitespace-only tasks are rejected. |

## Project structure

```text
index.html
dom.html
events.html
todo.html
assets/
  css/style.css
  js/basics.js
  js/dom.js
  js/events.js
  js/todo.js
```

JavaScript is loaded using `defer`, so the HTML exists before the scripts access DOM elements. Event listeners use `addEventListener()`. User-entered text is inserted with `textContent`. The To-Do array is the source of task state; no database, cookies or local storage are used.

## Publishing

GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root) → Save**. GitHub Pages serves the static files directly; `.nojekyll` disables Jekyll processing. The site URL is listed above.

## Submission requirements

The supplied assignment requests the repository link, a README with a brief description and instructions, navigation between separate pages, and publication using GitHub Pages or Netlify. It does **not** explicitly request a separate written report, a minimum commit count, or a prescribed commit format. The history is divided into meaningful implementation steps.

Submit the repository link and include the published website link in the LMS submission. Meet the LMS deadline and defend the assignment in class. The rubric gives **20 points for practice**, **30 for the individual oral defense**, and **50 for live coding**; working code alone does not guarantee 100 points.
