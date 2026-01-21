(function () {
    const root = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");
    const overlay = document.getElementById("cinematicTransition");

    const STORAGE_KEY = "theme-preference";

    function isNightTime() {
        const hour = new Date().getHours();
        return hour >= 18 || hour < 6;
    }

    function systemPrefersDark() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function applyTheme(theme) {
        if (theme) {
            root.setAttribute("data-theme", theme);
        } else {
            root.removeAttribute("data-theme");
        }
    }

    function cinematicTransition(callback) {
        overlay.classList.add("active");
        document.body.classList.add("theme-transition");

        setTimeout(callback, 350);

        setTimeout(() => {
            overlay.classList.remove("active");
            document.body.classList.remove("theme-transition");
        }, 900);
    }

    function initTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            applyTheme(saved);
            return;
        }

        if (systemPrefersDark() || isNightTime()) {
            applyTheme("dark-red");
        }
    }

    toggleBtn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");

        cinematicTransition(() => {
            if (current === "dark-red") {
                applyTheme(null);
                localStorage.removeItem(STORAGE_KEY);
                toggleBtn.textContent = "☀️";
            } else {
                applyTheme("dark-red");
                localStorage.setItem(STORAGE_KEY, "dark-red");
                toggleBtn.textContent = "🌙";
            }
        });
    });

    initTheme();
})();
