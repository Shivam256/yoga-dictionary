const asanaContainer = document.querySelector("#asana-container");
const input = document.querySelector("input");
// const infoContainer = document.querySelector(".asana-info");
// const bPage = document.querySelector(".b-page");
let searchString;

const createAsanaCard = (asana) => {
  const card = document.createElement("div");
  card.innerHTML = `${asana.english_name} <br> (${asana.sanskrit_name})`;

  card.classList.add("col-3");
  card.classList.add("asana-card");

  // card.addEventListener("click",() => {
  //   infoContainer.style.display = "block";
  //   infoContainer.innerHTML = `<h1>${asana.english_name}</h1>`;
  //   bPage.style.display = "block";
  // });
  return card;
}

const addAllAsanas = (data) => {
  for(let asana of data){
    asanaContainer.append(createAsanaCard(asana));
  }
}
addAllAsanas(data);


const clearAllAsanas = () => {
  let count = asanaContainer.childElementCount;
  for(let i=0;i<count;i++){
    asanaContainer.firstChild.remove();
  }
}

let filteredData;

input.addEventListener("input",() => {
  clearAllAsanas();
  searchString = input.value.toLowerCase();
  filteredData = data.filter((asana) =>(
    asana.sanskrit_name.toLowerCase().includes(searchString) || asana.english_name.toLowerCase().includes(searchString)
  ));
  addAllAsanas(filteredData);
  if(asanaContainer.childElementCount == 0){
    console.log("no asana found");
  }
});











