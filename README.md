# IFSLS Student Support

## Run locally

Use Node.js 22.13 or newer, then run `npm start` and open the URL printed in the terminal.

## Host on Render

1. Push this project to a GitHub repository.
2. In Render, choose **New > Blueprint**, connect the repository, and let Render apply `render.yaml`.
3. Wait for the service to finish deploying, then open its `onrender.com` URL.

The Blueprint binds the server publicly and mounts SQLite at `/var/data`, so support requests survive restarts and deploys. Render requires a paid web-service plan for persistent disks; check the current price before confirming. A static-only host or a service without persistent storage will not preserve support requests.

## Stored data

The server creates `data/ifsls.sqlite` on first start. It stores support/contact submissions (name, email, topic and message) and usage events for guide opens, language changes, created PDFs and copied email templates. Usage events do not include names, email addresses, uploaded photos or IP addresses; usage records older than 90 days are removed at startup. Feedback remains in the database until the site operator removes it. Set `DATA_DIR` to use a different folder, such as a persistent storage volume when deploying.

To export all support submissions to a spreadsheet-compatible CSV, run `npm run export:feedback`. The file is written to `data/exports/feedback.csv`; open it with Excel or import it into Google Sheets. The export contains names, email addresses and support messages, so keep it private and do not publish it. It is excluded from version control with the rest of `data/`.

Photo files are processed in the visitor's browser and are never sent to the server. The server only serves the site's known static files and accepts the feedback and usage API routes.

If deploying the site, run the Node server on a host with persistent storage for the `data/` directory. A static-only hosting service will not save feedback or usage events.