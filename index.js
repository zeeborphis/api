function getCatInfo() {
    fetch("https://aws.random.cat/meow")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        const catContainer = document.getElementById("catContainer");
        const catInfoBox = document.createElement("section");
        const catImage = document.createElement("img");
        catImage.src = result.file;
        catInfoBox.append(catImage);
        catContainer.prepend(catInfoBox);
      });
  }
  
  document.getElementById("getCatInfo").onclick = getCatInfo;