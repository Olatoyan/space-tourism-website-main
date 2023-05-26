"use strict";

const container = document.querySelector(".container");
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

navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const parentEL = e.target.closest("li");

  const activeLinks = document.querySelectorAll(".active__link");
  activeLinks.forEach(function (link) {
    link.classList.remove("active__link");
  });

  parentEL.classList.add("active__link");

  if (parentEL && parentEL.id === "home") {
    homeSection.style.display = "grid";
    destinationSection.style.display = "none";
    crewSection.style.display = "none";
    technologySection.style.display = "none";
    container.style.backgroundImage =
      "url(assets/home/background-home-desktop.jpg)";
  } else if (parentEL && parentEL.id === "destination") {
    homeSection.style.display = "none";
    destinationSection.style.display = "grid";
    crewSection.style.display = "none";
    technologySection.style.display = "none";
    container.style.backgroundImage =
      "url(assets/destination/background-destination-desktop.jpg)";
  } else if (parentEL && parentEL.id === "crew") {
    homeSection.style.display = "none";
    destinationSection.style.display = "none";
    crewSection.style.display = "grid";
    technologySection.style.display = "none";
    container.style.backgroundImage =
      "url(assets/crew/background-crew-desktop.jpg)";
  } else if (parentEL && parentEL.id === "technology") {
    homeSection.style.display = "none";
    destinationSection.style.display = "none";
    crewSection.style.display = "none";
    technologySection.style.display = "grid";
    container.style.backgroundImage =
      "url(assets/technology/background-technology-desktop.jpg)";
  }
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

// const renderDestination = function (data) {
//   const html = `
//           <div class="destination__box">
//               <div class="tertiary__box">
//                 <span>01</span>
//                 <h3 class="tertiary__heading">Pick your destination</h3>
//               </div>
//             <div class="destination__img-box">
//               <img
//                 src="${data.images.png}"
//                 alt="Moon image"
//                 class="destination__img"
//               />
//             </div>
//           </div>
//           <div class="destination__text-box">
//             <div class="destinations__box">
//               <ul class="destinations">
//                 <li>
//                   <a href="#" class="active__destination destination moon">Moon</a>
//                 </li>
//                 <li><a href="#" class="destination mars">Mars</a></li>
//                 <li><a href="#" class="destination europa">Europa</a></li>
//                 <li><a href="#" class="destination titan">Titan</a></li>
//               </ul>
//             </div>
//             <h2 class="destination__heading">${data.name}</h2>
//             <p class="destination__text">${data.description}</p>
//             <div class="destination__distance">
//               <div class="distance__box">
//                 <p class="distance__text">Avg. distance</p>
//                 <p class="distance">${data.distance}</p>
//               </div>
//               <div class="travel__box">
//                 <p class="travel__text">Est. travel time</p>
//                 <p class="travel__duration">${data.travel}</p>
//               </div>
//             </div>
//             <!-- </div> -->
//           </div>
// `;

//   destinationSection.textContent = "";
//   destinationSection.insertAdjacentHTML("beforeend", html);

//   // const destinationLinks = document.querySelector(".destinations");
//   // const removeDesClass = function () {
//   //   const activeDes = document.querySelectorAll(".active__destination");
//   //   activeDes.forEach(function (link) {
//   //     link.classList.remove("active__destination");
//   //   });
//   // };
//   // destinationLinks.addEventListener("click", function (e) {
//   //   e.preventDefault();
//   //   removeDesClass();

//   //   if (
//   //     e.target.classList.contains("moon") ||
//   //     e.target.classList.contains("mars") ||
//   //     e.target.classList.contains("europa") ||
//   //     e.target.classList.contains("titan")
//   //   ) {
//   //     e.target.classList.add("active__destination");
//   //   }
//   //   // console.log(renderDestination());
//   // });
// };

// const destination = async function () {
//   const res = await fetch("data.json");
//   const data = await res.json();
//   console.log(data);
//   renderDestination(data.destinations[1]);
//   console.log(data.destinations[0]);

//   destinationSection.addEventListener("click", function (e) {
//     e.preventDefault();

//     // const destinationLinks = document.querySelectorAll(".destination");
//     // destinationLinks.forEach(function (link) {
//     //   link.classList.remove("active__destination");
//     // });

//     // if (e.target.classList.contains("destination")) {
//     //   if (!e.target.classList.contains("active__destination")) {
//     //     e.target.classList.add("active__destination");
//     //   }
//     // }

//     const destinationLinks = document.querySelectorAll(".destination");
//     destinationLinks.forEach(function (link) {
//       link.classList.remove("active__destination");
//     });

//     if (e.target.classList.contains("destination")) {
//       e.target.classList.add("active__destination");

//       if (e.target.classList.contains("moon")) {
//         console.log("Moon clicked");
//         renderDestination(data.destinations[0]);
//       } else if (e.target.classList.contains("mars")) {
//         console.log("Mars clicked");
//         renderDestination(data.destinations[1]);
//       } else if (e.target.classList.contains("europa")) {
//         renderDestination(data.destinations[2]);
//       } else if (e.target.classList.contains("titan")) {
//         renderDestination(data.destinations[3]);
//       }
//     }
//   });
// };
let r;
// const renderDestination = function (data) {
//   const html = `
//           <div class="destination__box">
//               <div class="tertiary__box">
//                 <span>01</span>
//                 <h3 class="tertiary__heading">Pick your destination</h3>
//               </div>
//             <div class="destination__img-box">
//               <img
//                 src="${data.images.png}"
//                 alt="space image"
//                 class="destination__img"
//               />
//             </div>
//           </div>
//           <div class="destination__text-box">
//             <div class="destinations__box">
//               <ul class="destinations">
//                 <li>
//                   <a href="#" class=" destination moon">Moon</a>
//                 </li>
//                 <li><a href="#" class="destination mars">Mars</a></li>
//                 <li><a href="#" class="destination europa">Europa</a></li>
//                 <li><a href="#" class="destination titan">Titan</a></li>
//               </ul>
//             </div>
//             <h2 class="destination__heading">${data.name}</h2>
//             <p class="destination__text">${data.description}</p>
//             <div class="destination__distance">
//               <div class="distance__box">
//                 <p class="distance__text">Avg. distance</p>
//                 <p class="distance">${data.distance}</p>
//               </div>
//               <div class="travel__box">
//                 <p class="travel__text">Est. travel time</p>
//                 <p class="travel__duration">${data.travel}</p>
//               </div>
//             </div>
//             <!-- </div> -->
//           </div>
// `;

//   destinationSection.textContent = "";
//   destinationSection.insertAdjacentHTML("beforeend", html);

//   // const destinationLinks = document.querySelector(".destinations");
//   // const removeDesClass = function () {
//   //   const activeDes = document.querySelectorAll(".active__destination");
//   //   activeDes.forEach(function (link) {
//   //     link.classList.remove("active__destination");
//   //   });
//   // };
//   // destinationLinks.addEventListener("click", function (e) {
//   //   e.preventDefault();
//   //   removeDesClass();

//   // if (
//   //   e.target.classList.contains("moon") ||
//   //   e.target.classList.contains("mars") ||
//   //   e.target.classList.contains("europa") ||
//   //   e.target.classList.contains("titan")
//   // ) {
//   //   e.target.classList.add("active__destination");
//   // }
//   //   //   //   // console.log(renderDestination());
//   // });
// };

const renderDestination = function (data) {
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
                <li class="destination moon">Moon
                </li>
                <li class="destination mars">Mars</li>
                <li class="destination europa">Europa</li>
                <li class="destination titan">Titan</li>
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

const destination = async function () {
  const res = await fetch("data.json");
  const data = await res.json();
  console.log(data);
  const destinationSection = document.querySelector(".destination__section");
  const crewSection = document.querySelector(".crew__section");
  renderDestination(data.destinations[0]);
  renderCrew(data.crew[0], 1);
  console.log(data.crew[0]);

  destinationSection.addEventListener("click", function (e) {
    if (e.target.classList.contains("destination")) {
      e.preventDefault();

      console.log(e.target);
      const destinationLinks = document.querySelectorAll(".destination");
      destinationLinks.forEach(function (link) {
        link.classList.remove("active__destination");
      });

      e.target.classList.add("active__destination");

      if (e.target.classList.contains("moon")) {
        console.log("Moon clicked");
        renderDestination(data.destinations[0]);
      } else if (e.target.classList.contains("mars")) {
        console.log("Mars clicked");
        renderDestination(data.destinations[1]);
      } else if (e.target.classList.contains("europa")) {
        renderDestination(data.destinations[2]);
      } else if (e.target.classList.contains("titan")) {
        renderDestination(data.destinations[3]);
      } else {
        return;
      }
    }
  });

  // crewSection.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   const dots = crewSection.querySelectorAll(".dot");
  //   dots.forEach((dot) => dot.classList.remove("active__dot"));

  //   const dotClass = e.target.classList;
  //   if (
  //     dotClass.contains("dot-1") ||
  //     dotClass.contains("dot-2") ||
  //     dotClass.contains("dot-3") ||
  //     dotClass.contains("dot-4")
  //   ) {
  //     const dots = crewSection.querySelectorAll(".dot");

  //     crewSection.textContent = "";
  //     const dotNumber = dotClass[1].charAt(4) - 1;
  //     // renderCrew(data.crew[dotNumber]);
  //     const dotElement = e.target.closest(".dot");
  //     if (dotElement) {
  //       const dotIndex = parseInt(dotElement.classList[1].split("-")[1]);
  //       renderCrew(data.crew[dotIndex - 1], true);

  //       dotElement.classList.add("active__dot");
  //     }
  //     console.log("a");
  //     dots.forEach((dot) => dot.classList.remove("active__dot"));

  //     dotClass.add("active__dot");
  //   }
  // });
  let r;
  // crewSection.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   const dots = crewSection.querySelectorAll(".dot");
  //   dots.forEach((dot) => dot.classList.remove("active__dot"));

  //   const dotClass = e.target.classList;
  //   if (
  //     dotClass.contains("dot-1") ||
  //     dotClass.contains("dot-2") ||
  //     dotClass.contains("dot-3") ||
  //     dotClass.contains("dot-4")
  //   ) {
  //     const dots = crewSection.querySelectorAll(".dot");

  //     crewSection.textContent = "";
  //     const dotNumber = dotClass[1].charAt(4) - 1;

  //     dots.forEach((dot) => dot.classList.remove("active__dot"));

  //     renderCrew(data.crew[dotNumber], true);
  //     console.log("a");

  //     dotClass.add("active__dot");
  //   }
  // });

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
      console.log("a");

      dotClass.add("active__dot");
    } else {
      return;
    }
  });
};
destination();
