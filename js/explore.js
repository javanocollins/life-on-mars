// NASA API_KEY
const API_KEY = "Q1L0ZbgndyK7g8eyIr403WGI9hNJ7no5cbRIBiNg";

// DOM Selectors
const curiosityImages = document.querySelector(".curiosity-images-container");
const perseveranceImages = document.querySelector(
    ".perseverance-images-container"
);
const spiritImages = document.querySelector(".spirit-images-container");
const opportunityImages = document.querySelector(
    ".opportunity-images-container"
);

const spiritName = document.querySelector(".spirit");
const opportunityName = document.querySelector(".opportunity");

let exploreHeader = document.getElementById("explore-header");
const arrowIcon = document.querySelector(".fa-arrow-circle-down");
const img = document.getElementsByClassName("explore-img");

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];

const body = document.body;

/*
Get hours of the day in 24Hr format (0-23)

A day or night background is set depending
on the time of the day.
From 8pm to 5:59am: Night Background Image
From 6am to 7:59pm: Day Background Image
*/
let hr = new Date().getHours();

const setBg = (headerName) => {
    let dayBg = "url('/img/header-bg.png')"
    let nightBg = "url('/img/night-bg.jpg')"
    let setBg = "";

    if (hr >= 20 || hr <= 5) {
        setBg = nightBg;
    } else {
        setBg = dayBg;
    }
    headerName.style.backgroundImage = setBg;
};

opportunityName.addEventListener("click", () => {
    if ((opportunityImages.style.display == "block")) {
        opportunityImages.style.display = "none";
    } else {
        opportunityImages.style.display == "block";
    }
});

/*
This function fetches a dynamic NASA url by
taking in two arguments roverName and camerImages
*/
const roverImages = async (roverName, cameraImages) => {
    const url = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?api_key=${API_KEY}&sol=1`
    );

    let data = await url.json();
    data.photos.slice(0, 100).filter((photo) => {
        return (cameraImages.innerHTML += `
         <div class="images">
             <img class="explore-img" src=${photo.img_src}>
         </div>
         `);
    });
    console.log();
};

roverImages("curiosity", curiosityImages);
roverImages("perseverance", perseveranceImages);
roverImages("opportunity", opportunityImages);
roverImages("spirit", spiritImages);

setBg(exploreHeader);

// Get the modal

// Get the image and insert it inside the modal - use its "alt" text as a caption

window.addEventListener("load", () => {
    setTimeout(() => {
        var arr = [...img];
        for (let i = 0; i < img.length; i++) {
            img[i].addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img[i].src;
                body.style.overflow = "hidden";
            });
        }
    }, 2000);
});

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "auto";
});
