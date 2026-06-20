# node-ejs-kickstart — IT102 EJS Assignment

Node.js/Express/EJS templating assignment for IT102.

## Rules

- **Never commit or push without explicit user approval.** Always suggest a commit message and wait for the go-ahead.
- After any commit is made, suggest a one-line commit message (no AI attribution, no `Co-Authored-By`).
- Git identity is set at the repo level (`Vale310` / `122951323+Vale310@users.noreply.github.com`) — do not touch global git config.

## Structure

- `app.js` — Express routes (one `app.get` per page)
- `views/partials/header.ejs` — Bootswatch Spacelab navbar, opens `<div class="container">`
- `views/partials/footer.ejs` — closes container, Bootstrap JS, credit line
- `views/pages/` — one `.ejs` per route; every file includes header + footer partials

## Footer credit line (required by assignment)

```
This site was built using Node.js, Express.js and EJS templates by Vale310
```
