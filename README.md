# QuickHost-Template

QuickHost-Template is a modern, responsive, and highly customizable website template for game hosting providers. Built with Tailwind CSS and vanilla JavaScript, it allows for easy content modification through simple JSON configuration files, eliminating the need to directly edit HTML code. The template features a sleek design, smooth animations, and interactive components to provide a professional user experience out-of-the-box.

## Key Features

-   **JSON-driven Content:** Easily update text, links, and services by editing simple `.json` files.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development and customization.
-   **Interactive Components:** Includes a monthly/yearly pricing toggle, an FAQ accordion, and a contact form.
-   **Smooth Animations:** On-scroll fade-in animations for a dynamic feel.
-   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
-   **Pre-built Pages:** Comes with a main page (`index.html`) and an about page (`about.html`).

## Installation

To get started with this template, ensure you have [Node.js](https://nodejs.org/) and npm installed.

1.  Clone the repository:
    ```bash
    git clone https://github.com/ArctisDev/QuickHost-Template.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd QuickHost-Template
    ```

3.  Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

To work on the template, you need to run the Tailwind CSS compiler, which watches for changes in your CSS files and rebuilds the stylesheet automatically.

**On Windows:**

You can simply double-click the `start-tailwind.bat` file.

**On macOS / Linux (or manually):**

Run the following command in your terminal:
```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
```

This command starts the Tailwind CSS build process in watch mode. To view the website, open the `index.html` or `about.html` files in your web browser.

## Customization

This template is designed for easy customization through JSON files located in the `pages/` directory. Each page (`index.html`, `about.html`) has its own set of configuration files.

-   Configurations for the main page are in `pages/index/configs/`.
-   Configurations for the about page are in `pages/about/configs/`.

### Example: Changing the Hero Title

1.  Open the file `pages/index/configs/hero-config.json`.
2.  Modify the values for `title`, `titleDecoration`, and `subTitle`.
3.  Save the file. The changes will be reflected on the homepage automatically when you refresh your browser.

### Example: Updating Services

1.  Open the file `pages/index/configs/services-config.json`.
2.  Edit the `cards` array to add, remove, or modify the services offered. You can also change the Font Awesome icon class for each service.

Components like the navbar and footer have separate configuration files for each page (e.g., `navbar-config.json`, `footer-config.json`) to allow for maximum flexibility.

## Project Structure

The repository is organized as follows:

```
├── index.html                # Main Cpage
├── about.html                # About page
├── pages/
│   ├── index/configs/        # JSON configuration files for index.html
│   └── about/configs/        # JSON configuration files for about.html
├── src/
│   ├── css/                  # CSS files, including Tailwind input/output
│   ├── js/                   # JavaScript files for interactivity
│   └── images/               # Site images and logos
├── package.json              # Project dependencies
├── start-tailwind.bat        # Utility script for Windows
└── LICENSE                   # Project License
```

## License

This project is released into the public domain under the [Unlicense](https://unlicense.org/). See the `LICENSE` file for more details.
