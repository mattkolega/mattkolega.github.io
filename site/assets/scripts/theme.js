const theme = {
    light: 'light',
    dark:  'dark'
};

const getPreferedColourScheme = () => {
    if (globalThis.matchMedia) {  // Check if media queries are supported
        return globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? theme.dark
        : theme.light;
    } else {  // Return light as default if media queries not supported
        return theme.light;
    }
}

const switchThemeIcon = (currentTheme) => {
    const themeIcon = document.querySelector("#theme-switcher svg use");
    if (currentTheme == theme.dark) {
        themeIcon.setAttribute("href", "./assets/icons/sun.svg#lightIcon");
    } else {
        themeIcon.setAttribute("href", "./assets/icons/moon.svg#darkIcon");
    }
}

const initialTheme = ('theme' in localStorage)
    ? localStorage.getItem('theme')
    : getPreferedColourScheme();

document.documentElement.setAttribute('data-theme', initialTheme);

document.addEventListener(
    'DOMContentLoaded',
    () => {
        switchThemeIcon(initialTheme);
        document.getElementById('theme-switcher').addEventListener(
            'click',
            () => {
                // Swap themes
                const newTheme = (document.documentElement.getAttribute('data-theme') == theme.light)
                    ? theme.dark
                    : theme.light;

                switchThemeIcon(newTheme);
                localStorage.setItem('theme', newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        );
    }
);

if (globalThis.matchMedia) {  // Check if media queries are supported
    globalThis.matchMedia('(prefers-color-scheme: dark)').addEventListener(
        'change',
        (event) => {
            switchThemeIcon(event.matches ? theme.light : theme.dark);
            localStorage.removeItem('theme');
            document.documentElement.setAttribute('data-theme', event.matches ? theme.light : theme.dark);
        }
    );
}