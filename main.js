const cover = document.querySelectorAll(".cover");
const trackList = document.querySelector(".track-list");
const clrBtn = document.querySelector("#clear");
const sbmtBtn = document.querySelector("#submit");
let choice = {};
let url = "https://lit-fortress-6467.herokuapp.com/post";
fetch("https://lit-fortress-6467.herokuapp.com/object")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let myAlbums = data.results;
    for (let i = 0; i < myAlbums.length; i++) {
      let img = document.createElement("img");
      img.src = myAlbums[i]["cover_art"];
      cover[i].appendChild(img);
      cover[i].id = myAlbums[i]["id"];
      cover[i].addEventListener("click", function() {
        let ptag = document.createElement("p");
        ptag.innerHTML = `${myAlbums[i]["artist"]}: ${myAlbums[i]["title"]}`;
        trackList.appendChild(ptag);
        choice[myAlbums[i]["artist"]] = myAlbums[i]["title"];
      });
    }
  });

clrBtn.addEventListener("click", function() {

  trackList.innerHTML = '';
  choice = {};

});
sbmtBtn.addEventListener("click", function() {
  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(choice), // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
    alert(`Selected tracks: ${trackList.innerText}`);
});
