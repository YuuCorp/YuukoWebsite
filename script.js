function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('light-theme');
        document.getElementById('slider').checked = true;
    }
})();