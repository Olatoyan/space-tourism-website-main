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

// navLinks.addEventListener("click", function (e) {
//   // console.log(e.target);
//   if (e.target.closest("li").querySelector("#home")) {
//     // if (e.target.closest("li").querySelector("#home")) {
//     // console.log(e.target.querySelector("#home"));
//     // console.log(e.target.querySelector(".active__link"));
//     // console.log(e.target.querySelector("id"));
//     console.log(e.target);
//     console.log("qq");
//     // }
//   }
// });

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
                alt="Moon image"
                class="destination__img"
              />
            </div>
          </div>
          <div class="destination__text-box">
            <div class="destinations__box">
              <ul class="destinations">
                <li>
                  <a href="#" class=" destination moon">Moon</a>
                </li>
                <li><a href="#" class="destination mars">Mars</a></li>
                <li><a href="#" class="destination europa">Europa</a></li>
                <li><a href="#" class="destination titan">Titan</a></li>
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

  // const destinationLinks = document.querySelector(".destinations");
  // const removeDesClass = function () {
  //   const activeDes = document.querySelectorAll(".active__destination");
  //   activeDes.forEach(function (link) {
  //     link.classList.remove("active__destination");
  //   });
  // };
  // destinationLinks.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   removeDesClass();

  // if (
  //   e.target.classList.contains("moon") ||
  //   e.target.classList.contains("mars") ||
  //   e.target.classList.contains("europa") ||
  //   e.target.classList.contains("titan")
  // ) {
  //   e.target.classList.add("active__destination");
  // }
  //   //   //   // console.log(renderDestination());
  // });
};
const destination = async function () {
  const res = await fetch("data.json");
  const data = await res.json();
  console.log(data);
  const destinationSection = document.querySelector(".destination__section");
  renderDestination(data.destinations[0]);
  console.log(data.destinations[0]);

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
};
destination();

destinationSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("destination")) {
    e.preventDefault();
  }
});
// const destination = async function () {
//   const res = await fetch("data.json");
//   const data = await res.json();
//   console.log(data);
//   renderDestination(data.destinations[1]);
//   console.log(data.destinations[0]);
//   const destinationSection = document.querySelector(".destination__section");

//   destinationSection.addEventListener("click", function (e) {
//     e.preventDefault();

//     const destinationLinks = document.querySelector(".destinations");
//     const removeDesClass = function () {
//       const activeDes = document.querySelectorAll(".active__destination");
//       activeDes.forEach(function (link) {
//         link.classList.remove("active__destination");
//       });
//     };
//     destinationLinks.addEventListener("click", function (e) {
//       console.log("aa");
//       e.preventDefault();
//       removeDesClass();
//       if (e.target.classList.contains("destination")) {
//         e.target.classList.add("active__destination");
//       }
//       //   // console.log(renderDestination());

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
//       } else {
//         return;
//       }
//     });
//   });
// };
