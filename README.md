# Cloning a YouTube Page with CSS

Project developed in the CSS Web Developer Bootcamp at Digital Innovation One, with guidance from the expert [Michele Ambrosio](https://github.com/micheleambrosio "Michele Ambrosio").
In this challenge, you'll get hands-on experience and clone a YouTube page using CSS, putting all the concepts you've learned into practice, especially regarding Flexbox.

## Technologies Used

- **HTML** - semantic markup and page structure.
- **CSS** - styles, CSS variables, dark/light theme and responsiveness.
- **JavaScript** - theme logic, language, generation of example cards and interactions.

## How to use

1. Open `index.html` in your browser (double-click or drag to the browser window).
2. **Change theme**: click the theme button in the header (moon/sun icon). The default theme is **dark**. The state is saved in **localStorage**.
3. **Change language**: select EN, PT, or ES from the language selector in the header. The choice is saved in **localStorage**.
4. **Search**: use the search box to filter the example cards (local functionality, no backend).
5. **Shortcuts**: `Ctrl`/`Cmd` + `T` toggles the theme.

## Implemented features

- **Semantics**: use of `header`, `nav`, `main`, `section`, `article`, `footer`.
- **Accessibility**: labels, `aria-*`, `role`, `tabindex`, visible focus, and alternative text.
- **Responsiveness**: layout adapted for desktop, tablet, and smartphone with media queries and Flexbox.
- **Persistence**: theme and language saved in `localStorage`.
- **Embedded Video**: DIO video included via `<iframe>` for educational purposes.

## Quick Customization

- **Add Videos**: edit the HTML in the main section or modify the `sample` array in `script.js` to generate more cards.
- **Change Default Language**: in `script.js`, adjust `defaultLocale`.
- **Change Initial Theme**: in `script.js`, change the value saved in `localStorage` or the default value used at initialization.
- **Colors and typography**: edit CSS variables in `:root` and `[data-theme="dark"]` in `style.css`.

## Best practices and suggested extensions

- Validate with accessibility tools such as Lighthouse or axe.
- Add color contrast tests to ensure readability.
- Implement lazy loading of iframes if there are many videos.
- Replace local fonts with Google Fonts or system variables as needed.

## Legal notes

This project is for educational purposes only. The embedded video is third-party content hosted on YouTube; respect copyright and platform terms of use when redistributing.

![Screenshot](/img/yt_clone_demo.png)

[LICENSE](/LICENSE)
