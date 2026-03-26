const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size-btn");
const sizeDisplay = document.querySelector("#size-display")
const clearBtn = document.querySelector("#clear-btn");
const randomBtn = document.querySelector("#random-btn");


function createGrid(size) {

  container.textContent = "";
  sizeDisplay.textContent = `${size} * ${size}`;

  const divSize = 590 / size;

  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");

    newDiv.classList.add("newDiv");
    newDiv.style.height = divSize + "px";
    newDiv.style.width = divSize + "px";

    let color = "darkgrey";

    randomBtn.addEventListener("click", () => color = `rgb(${randomCol()}, ${randomCol()}, ${randomCol()})`)

    newDiv.addEventListener("mouseover", ()=> {
      newDiv.style.backgroundColor = color;
    });

    container.appendChild(newDiv);
  }
}

let size = 16;
createGrid(16);


sizeBtn.addEventListener("click", () => {

  do {
    size = parseInt(prompt("Enter new grid size (1 - 100):"));
  } while(size > 100)

  createGrid(size);
});


clearBtn.addEventListener("click", () => createGrid(size));


function randomCol() {
  return Math.floor(Math.random() * 256);
}