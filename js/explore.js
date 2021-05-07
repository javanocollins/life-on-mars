const curiosityImages = document.querySelector(".curiosity-images-container");
const perseveranceImages = document.querySelector(
    ".perseverance-images-container"
);
const sojournerImages = document.querySelector(".sojourner-images-container");
let exploreHeader = document.getElementById("explore-header");
const arrowIcon = document.querySelector(".fa-arrow-circle-down");

// Get hours of the day in 24Hr format (0-23)
let hr = new Date().getHours();

const setBg = (headerName) => {
    const dayBg = "url('../img/header-bg.png')";
    const nightBg = "url('../img/night-bg.jpg')";
    let setBg = "";

    if (hr >= 20 || hr <= 8) {
        setBg = nightBg;
    } else {
        setBg = dayBg;
    }

    headerName.style.backgroundImage = setBg;
};

const apiKey = "Q1L0ZbgndyK7g8eyIr403WGI9hNJ7no5cbRIBiNg";

const roverImages = async (roverName, cameraImages) => {
    const url = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/latest_photos?api_key=${apiKey}`
    );

    let data = await url.json();

    data.latest_photos.map((photo) => {
        return (cameraImages.innerHTML += `
        <div class="images">
            <img class="explore-img" src=${photo.img_src}>
        </div>
        `);
    });
    console.log(data);
};

roverImages("curiosity", curiosityImages);
roverImages("sojourner", sojournerImages);
roverImages("perseverance", perseveranceImages);

setBg(exploreHeader);

arrowIcon.addEventListener('click', () => {
    scrollIntoView({ behavior: "smooth" });
})

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName("explore-img");
const modalImg = document.getElementById("img01");

window.addEventListener("load", () => {
    setTimeout(() => {
        var arr = [...img];
        for (let i = 0; i < img.length; i++) {
            img[i].addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img[i].src;
                console.log(img[i].src);
                console.log(modalImg);
            });
        }
        console.log(img.length);
    }, 3000);
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
    modal.style.display = "none";
});
