const album = document.querySelectorAll('.album');

let index = [];
while (index.length < 3) {
  let num = Math.floor(Math.random() * 5);
  if (index.indexOf(num) > -1) continue;
  index[index.length] = num;
}

fetch("https://lit-fortress-6467.herokuapp.com/object")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let i = 0; i < index.length; i++) {
      let img = document.createElement("img");
      img.src = data.results[index[i]]["cover_art"];
      album[i].appendChild(img);
    }
  });
