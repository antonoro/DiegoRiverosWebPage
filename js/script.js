// eslint-disable-next-line no-unused-vars
function updateCardPositions() {
  "use strict";

  const ids = ["cardmariolinares", "carddariocorreal", "cardluiscardenas"];
  const idstipo = ["title", "photo"];

  const src = [
    "./images/mariolinares.jpg",
    "./images/dariocorreal.jpg",
    "./images/luiscardenas.jpg"
  ];
  const names = ["Mario Linares", "Dario Correal", "Luis Cardenas"];

  let i = 0,
    j = 1,
    k = 2;
  const title = 0,
    photo = 1;

  setInterval(function() {
    document
      .getElementById(ids[i] + idstipo[photo])
      .setAttribute("src", src[i]);
    document.getElementById(ids[i] + idstipo[title]).innerText = names[i];

    document
      .getElementById(ids[j] + idstipo[photo])
      .setAttribute("src", src[j]);
    document.getElementById(ids[j] + idstipo[title]).innerText = names[j];

    document
      .getElementById(ids[k] + idstipo[photo])
      .setAttribute("src", src[k]);
    document.getElementById(ids[k] + idstipo[title]).innerText = names[k];

    i === 2 ? (i = 0) : i++;
    j === 2 ? (j = 0) : j++;
    k === 2 ? (k = 0) : k++;
  }, 2000);
}
