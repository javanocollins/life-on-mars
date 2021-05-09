let homeHeader = document.getElementById("home-header");

// Get hours of the day in 24Hr format (0-23)
let hr = new Date().getHours();

const setBg = (headerName) => {
    let dayBg = "url('./img/header-bg.png')";
    let nightBg = "url('./img/night-bg.jpg')";
    let setBg = "";

    if (hr >= 20 || hr <= 5) {
        setBg = nightBg;
    } else {
        setBg = dayBg;
    }
    headerName.style.backgroundImage = setBg;
};

setBg(homeHeader);
