# SaveLink – Store Your Preferred Links

## Overview

SaveLink is a small browser extension project built for learning purposes.

This project was created by following a freeCodeCamp tutorial based on Scrimba. The goal was to practice:

- JavaScript fundamentals
- DOM manipulation
- localStorage usage
- Basic browser extension development

This is a testing and experimental project. The functionality is intentionally simple and there is still a lot more to improve and learn.

---

## Project Status

- Built for experimentation and learning
- UI customized for styling practice
- Minimal functionality by design
- No backend
- No database
- No external data collection

All saved links are stored locally in the browser using localStorage.  
Nothing is sent to any external server.

---

## Features

- Save manually entered links
- Save the currently active tab
- Delete all saved links
- Persistent storage using localStorage
- Custom animated UI

---

## How It Works

The extension stores links in the browser’s localStorage.  
When the extension is opened again, it reads the stored data and renders the saved links.

There is no cloud sync and no external storage.

---

## Installation (Local Testing in Firefox)

Follow these steps to run the extension locally:

1. Open Firefox.
2. In the address bar, type:

   about:debugging

3. Click **This Firefox**.
4. Click **Load Temporary Add-on**.
5. Navigate to your project folder.
6. Select the `manifest.json` file.
7. The extension will now load temporarily.
8. Click the extension icon in the toolbar to use it.

Important:

This temporary installation will be removed when Firefox is closed.  
You will need to load it again using the same steps for further testing.

*Only did Local Testing in Firefox, you can try it out in other browsers as well.*

---

<pre>## Project Structure

SaveLink-Extension/
│
├── floating-cogs.svg
├── icon.png
├── index.html
├── main.js
├── manifest.json
└── style.css</pre>
---

## Future Improvements

- Better URL validation
- Improved error handling
- Code refactoring
- Optional cloud sync
- Performance optimization
- Publishing to official extension stores

---

## License

This project is licensed under the MIT License.

It is open for learning, modification, and experimentation.
