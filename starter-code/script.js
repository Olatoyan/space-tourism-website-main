"use strict";

const container = document.querySelector(".container");
const header = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");
const destinationID = document.getElementById("destination");
const homeID = document.getElementById("home");
const homeSection = document.querySelector(".home__section");
const exploreBtn = document.querySelector(".home__explore-box");
const destinationSection = document.querySelector(".destination__section");
const crewSection = document.querySelector(".crew__section");
const technologySection = document.querySelector(".technology__section");
const destinationLinks = document.querySelector(".destinations");
const dotContainer = document.querySelector(".dots");

btnNav.addEventListener("click", function (e) {
  e.stopPropagation();
  header.classList.toggle("nav-open");
});

window.addEventListener("click", function () {
  header.classList.remove("nav-open");
});

navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const parentEL = e.target.closest("li");
  parentEL.closest("header").classList.remove("nav-open");

  const activeLinks = document.querySelectorAll(".active__link");
  activeLinks.forEach(function (link) {
    link.classList.remove("active__link");
  });

  parentEL.classList.add("active__link");

  const backgroundImages = {
    home: {
      mobile: "assets/home/background-home-mobile.jpg",
      tablet: "assets/home/background-home-tablet.jpg",
      desktop: "assets/home/background-home-desktop.jpg",
    },
    destination: {
      mobile: "assets/destination/background-destination-mobile.jpg",
      tablet: "assets/destination/background-destination-tablet.jpg",
      desktop: "assets/destination/background-destination-desktop.jpg",
    },
    crew: {
      mobile: "assets/crew/background-crew-mobile.jpg",
      tablet: "assets/crew/background-crew-tablet.jpg",
      desktop: "assets/crew/background-crew-desktop.jpg",
    },
    technology: {
      mobile: "assets/technology/background-technology-mobile.jpg",
      tablet: "assets/technology/background-technology-tablet.jpg",
      desktop: "assets/technology/background-technology-desktop.jpg",
    },
  };

  const screenWidth = window.innerWidth;
  let backgroundImageURL;

  if (parentEL && parentEL.id === "home") {
    homeSection.style.display = "grid";
    destinationSection.style.display = "none";
    crewSection.style.display = "none";
    technologySection.style.display = "none";

    if (screenWidth <= 900) {
      backgroundImageURL = backgroundImages.home.tablet;
    } else if (screenWidth <= 600) {
    } else {
      backgroundImageURL = backgroundImages.home.desktop;
    }
  } else if (parentEL && parentEL.id === "destination") {
    homeSection.style.display = "none";
    destinationSection.style.display = "grid";
    crewSection.style.display = "none";
    technologySection.style.display = "none";

    if (screenWidth <= 900) {
      backgroundImageURL = backgroundImages.destination.tablet;
    } else {
      backgroundImageURL = backgroundImages.destination.desktop;
    }
  } else if (parentEL && parentEL.id === "crew") {
    homeSection.style.display = "none";
    destinationSection.style.display = "none";
    crewSection.style.display = "grid";
    technologySection.style.display = "none";

    if (screenWidth <= 900) {
      backgroundImageURL = backgroundImages.crew.tablet;
    } else {
      backgroundImageURL = backgroundImages.crew.desktop;
    }
  } else if (parentEL && parentEL.id === "technology") {
    homeSection.style.display = "none";
    destinationSection.style.display = "none";
    crewSection.style.display = "none";
    technologySection.style.display = "grid";

    if (screenWidth <= 900) {
      backgroundImageURL = backgroundImages.technology.tablet;
    } else {
      backgroundImageURL = backgroundImages.technology.desktop;
    }
  }

  container.style.backgroundImage = `url(${backgroundImageURL})`;
});

exploreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  homeSection.style.display = "none";
  destinationSection.style.display = "grid";
  destinationID.classList.add("active__link");
  homeID.classList.remove("active__link");
  container.style.backgroundImage =
    "url(assets/destination/background-destination-desktop.jpg)";
});

const renderDestination = function (data, activeDes) {
  const html = `
          <div class="destination__box">
              <div class="tertiary__box">
                <span>01</span>
                <h3 class="tertiary__heading">Pick your destination</h3>
              </div>
            <div class="destination__img-box">
              <img
                src="${data.images.png}"
                alt="space image"
                class="destination__img"
              />
            </div>
          </div>
          <div class="destination__text-box">
            <div class="destinations__box">
              <ul class="destinations">
                <li class="destination moon ${
                  activeDes === 1 ? "active__destination" : ""
                }">Moon
                </li>
                <li class="destination mars  ${
                  activeDes === 2 ? "active__destination" : ""
                }">Mars</li>
                <li class="destination europa  ${
                  activeDes === 3 ? "active__destination" : ""
                }">Europa</li>
                <li class="destination titan  ${
                  activeDes === 4 ? "active__destination" : ""
                }">Titan</li>
              </ul>
            </div>
            <h2 class="destination__heading">${data.name}</h2>
            <p class="destination__text">${data.description}</p>
            <div class="destination__distance">
              <div class="distance__box">
                <p class="distance__text">Avg. distance</p>
                <p class="distance">${data.distance}</p>
              </div>
              <div class="travel__box">
                <p class="travel__text">Est. travel time</p>
                <p class="travel__duration">${data.travel}</p>
              </div>
            </div>
            <!-- </div> -->
          </div>
`;

  destinationSection.textContent = "";
  destinationSection.insertAdjacentHTML("beforeend", html);
};
const renderCrew = function (data, activeDotIndex) {
  const html = `
    <div class="crew__box">
      <div class="tertiary__box">
        <span>02</span>
        <h3 class="tertiary__heading">Meet your crew</h3>
      </div>
      <div class="crew__text-box">
        <h3 class="crew__role">${data.role}</h3>
        <h2 class="crew__name">${data.name}</h2>
        <p class="crew__bio">${data.bio}</p>
      </div>
      <div class="dots">
        <div class="dot dot-1 data-dot-index${
          activeDotIndex === 1 ? " active__dot" : ""
        }"></div>
        <div class="dot dot-2 data-dot-index${
          activeDotIndex === 2 ? " active__dot" : ""
        }"></div>
        <div class="dot dot-3 data-dot-index${
          activeDotIndex === 3 ? " active__dot" : ""
        }"></div>
        <div class="dot dot-4 data-dot-index${
          activeDotIndex === 4 ? " active__dot" : ""
        }"></div>
      </div>
    </div>
    <div class="crew__img-box">
      <img src="${data.images.png}" alt="" class="crew__img" />
    </div>
  `;

  crewSection.insertAdjacentHTML("beforeend", html);
};
const renderTech = function (data, activeNum) {
  const html = `

  
  <div class="tertiary__box">
  <span>03</span>
  <h3 class="tertiary__heading">Space launch 101</h3>
  </div>
  
  <div class="box">
        <div class="technology__box">
          <div class="technology__text-box">
            <div class="technology__number-box">
              <p class="technology__number tech-1 ${
                activeNum === 1 ? "active__number" : ""
              }">1</p>
              <p class="technology__number tech-2 ${
                activeNum === 2 ? "active__number" : ""
              }">2</p>
              <p class="technology__number tech-3 ${
                activeNum === 3 ? "active__number" : ""
              }">3</p>
            </div>
            <div class="technology__description-box">
              <h3 class="technology__description">The terminology...</h3>
              <h2 class="technology__heading">${data.name}</h2>
              <p class="technology__text">${data.description}</p>
            </div>
          </div>
        </div>
        <div class="technology__img-box">
          <picture>
            <source
              srcset="${data.images.landscape}"
              media="(max-width: 900px)"
              alt="launch vehicle landscape"
              class="technology__img"
            />
            <img
            src="${data.images.portrait}"
            alt="launch vehicle"
            class="technology__img"
          />
      </picture>
         
      </div>
      </div>
  `;

  technologySection.insertAdjacentHTML("beforeend", html);
};

const destination = async function () {
  const res = await fetch("data.json");
  const data = await res.json();
  const destinationSection = document.querySelector(".destination__section");
  const crewSection = document.querySelector(".crew__section");
  const technologySection = document.querySelector(".technology__section");

  renderDestination(data.destinations[0], 1);
  renderCrew(data.crew[0], 1);
  renderTech(data.technology[0], 1);

  destinationSection.addEventListener("click", function (e) {
    if (e.target.classList.contains("destination")) {
      e.preventDefault();

      const destinationLinks = document.querySelectorAll(".destination");
      destinationLinks.forEach(function (link) {
        link.classList.remove("active__destination");
      });

      e.target.classList.add("active__destination");

      if (e.target.classList.contains("moon")) {
        renderDestination(data.destinations[0], 1);
      } else if (e.target.classList.contains("mars")) {
        renderDestination(data.destinations[1], 2);
      } else if (e.target.classList.contains("europa")) {
        renderDestination(data.destinations[2], 3);
      } else if (e.target.classList.contains("titan")) {
        renderDestination(data.destinations[3], 4);
      } else {
        return;
      }
    }
  });

  crewSection.addEventListener("click", function (e) {
    if (!e.target.classList.contains("dot") && !e.target.closest(".dot")) {
      return;
    }
    e.preventDefault();
    const dots = crewSection.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active__dot"));

    const dotClass = e.target.classList;
    if (
      dotClass.contains("dot-1") ||
      dotClass.contains("dot-2") ||
      dotClass.contains("dot-3") ||
      dotClass.contains("dot-4")
    ) {
      const dots = crewSection.querySelectorAll(".dot");

      crewSection.textContent = "";
      const dotNumber = dotClass[1].charAt(4) - 1;

      dots.forEach((dot) => dot.classList.remove("active__dot"));

      renderCrew(data.crew[dotNumber], dotNumber + 1);

      dotClass.add("active__dot");
    } else {
      return;
    }
  });

  technologySection.addEventListener("click", function (e) {
    if (
      !e.target.classList.contains("technology__number") &&
      !e.target.closest(".technology__number")
    ) {
      return;
    }
    const numTech = document.querySelectorAll(".technology__number");
    numTech.forEach((num) => num.classList.remove("active__number"));
    const techClass = e.target.classList;
    if (
      techClass.contains("tech-1") ||
      techClass.contains("tech-2") ||
      techClass.contains("tech-3")
    ) {
      techClass.add("active__number");
    }
    if (techClass.contains("tech-1")) {
      technologySection.textContent = "";
      renderTech(data.technology[0], 1);
    } else if (techClass.contains("tech-2")) {
      technologySection.textContent = "";
      renderTech(data.technology[1], 2);
    } else if (techClass.contains("tech-3")) {
      technologySection.textContent = "";
      renderTech(data.technology[2], 3);
    }
  });
};
destination();
