const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
    
const userTheme = localStorage.getItem("theme");
const systemThem = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};
  
const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemThem)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        return;

    }
     sunIcon.classList.add("hidden");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "Light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

sunIcon.addEventListener("click", () =>{

    themeSwitch();
});

moonIcon.addEventListener("click", () =>{
    console.log("succes");
    themeSwitch();
});

themeCheck();