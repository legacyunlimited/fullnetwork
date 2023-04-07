const containerEl = document.querySelector(".container");

const button = document.querySelector("#run");
button.addEventListener("click", start);
function start() {
  console.log("start");
  fetch("http://localhost:3000/albums")
    .then((response) => response.json())
    .then((albums) => {
      albums.forEach((albums) => {
        containerEl.innerHTML += `<h2>${albums.name}<h2>`;
      });
    });
}
