const themeToggleEl = document.getElementById('theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeToggleEl.addEventListener('click', toggleClickHandler);

currentThemeState();

function toggleClickHandler() {
    let currentTheme = document.body.classList.value;
    console.log(currentTheme);

    if (document.body.classList.contains(Theme.LIGHT)) {
        document.body.classList.replace('light-theme', 'dark-theme');
        
        localStorage.setItem('theme', Theme.DARK);
        return;
    };
    
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
}

function currentThemeState() {
    document.body.classList.value = Theme.LIGHT;
    const userTheme = localStorage.getItem('theme');

    if (userTheme === Theme.DARK) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        themeToggleEl.checked = true;
    }
}