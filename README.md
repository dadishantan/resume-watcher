# 📄 Resume Watcher — Chrome Extension + View Tracker

**Resume Watcher** helps job seekers track who opens their resume and when — using a smart combination of a Chrome extension, a Google Sheet, and a hosted redirect page.

---

## 🚀 Features

- 🔗 Generate unique, trackable links for each recruiter
- 🕵️‍♂️ Track name, timestamp, and device when your resume is opened
- 🌐 Securely hosted on Netlify with your own Google Sheet
- 🔧 No backend server required — uses Google Apps Script

---

## 📦 Folder Structure

```
resume-watcher/
├── config.js       # 🔐 UPDATE THIS FILE with your own keys and links
├── index.html      # The redirect + logging page
├── style.css       # Optional: Clean, centered UI
└── README.md       # You're reading it!
```

---

## ✍️ Setup Instructions

### 1. 📄 Create a Google Sheet & Script
- Open [Google Sheets](https://sheets.new)
- Add headers: `Name | Timestamp | User Agent`
- Go to **Extensions > Apps Script**
- Paste this:

```javascript
function doGet(e) {
  const SECRET_KEY = "shantan123"; // You can change this
  if (e.parameter.key !== SECRET_KEY) {
    return HtmlService.createHtmlOutput("Unauthorized");
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const name = e.parameter.viewer || "Unknown";
  const timestamp = new Date();
  const ua = e.parameter.ua || "N/A";

  sheet.appendRow([name, timestamp, ua]);
  return HtmlService.createHtmlOutput("Logged");
}
```

- Deploy it as a **web app** (accessible to "Anyone")

---

### 2. ⚙️ Edit `config.js`

```javascript
const CONFIG = {
  LOGGING_URL: "YOUR_SCRIPT_URL_HERE",
  SECRET_KEY: "YOUR_SECRET_KEY",
  RESUME_URL: "YOUR_GOOGLE_DOC_VIEW_LINK"
};
```

> 🛠️ **IMPORTANT**: You must replace the placeholder values with your own:
> - `LOGGING_URL`: Your Google Apps Script deploy URL
> - `SECRET_KEY`: Whatever you defined in your script
> - `RESUME_URL`: Your shareable Google Docs resume link

---

### 3. 🌍 Deploy the Redirect Page

- Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
- Drag your folder (`resume-watcher/`) into the page
- Netlify will give you a public link like:
  ```
  https://resume-watcher.netlify.app
  ```

---

### 4. 🔗 Use It

You can now create links like:

```
https://resume-watcher.netlify.app/?viewer=John
```

Send them to recruiters — when they open the link:
- Their name, time, and browser info will be logged to your Google Sheet
- They'll be redirected to your resume

---

## 🛡 Security Note

Only users with the full link (including secret key) can log data. Do **not** expose sensitive personal data.

---

## ✅ License

MIT — free to use, fork, improve, and share!

---

## 🙋‍♂️ Need Help?

Open an issue or email me at [your email here].
