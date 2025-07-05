QuickHost Template
==================

QuickHost Template is a professional and fully responsive website template built with HTML, CSS, and JavaScript, styled using Tailwind CSS. Designed to help users quickly deploy a modern, polished website without needing a backend or advanced development skills.

🎯 Purpose
----------

QuickHost was built for:

- People with limited time to build a website from scratch
- Those who can't afford to hire a professional developer
- Devs who want a clean, customizable starting point

It uses .json files to manage dynamic content, making it easy to update the site without touching HTML directly.

⚠️ Important: For the content to load properly, the site must be served via a live server (e.g., Live Server extension in VS Code) or hosted on a web server.

🧱 Project Structure
--------------------

QuickHost-Template/
├── index.html               # Main homepage
├── about.html               # About page
├── src/                     # Source-related files (optional)
├── css/
│   ├── animations.css       # Animation styles
│   ├── input.css            # Tailwind input config
│   ├── output.css           # Compiled Tailwind CSS
│   ├── others.css
│   └── style.css            # General styling
├── about/
│   └── style.css            # Page-specific styles
├── index/
│   └── style.css            # Page-specific styles
├── images/
│   └── logo.png             # Site logo and other images
├── js/
│   ├── fade-in-elements.js  # Animation scripts
│   ├── faqs.js              # FAQ functionality
│   ├── loader.js            # Preloader logic
│   └── monthly-yearly.js    # Plan toggles and pricing logic
├── start-tailwind.bat       # Script to launch Tailwind CLI
└── README.txt

⚙️ Setup Instructions
---------------------

1. Clone the repository:

   git clone https://github.com/ArctisDev/QuickHost-Template.git

2. Start the Tailwind watcher:

   Run "start-tailwind.bat" to compile Tailwind styles in real-time.

3. Preview the site:

   Use a live server (e.g., Live Server extension in VS Code) to open index.html

4. Customize content:

   Edit the .json files and styling/HTML as needed.

✨ Features
-----------

- Built with Tailwind CSS
- Structured and scalable folder organization
- Dynamically loads content via JavaScript
- Lightweight and fast with no backend required
- Easy to modify and extend for any use case

📄 License
----------

Licensed under the MIT License.
