import HouseService from "./HouseService.js";

let houseService = new HouseService();

function drawHouses() {
  let houses = houseService.getHouses();
  let template = "";

  for (let i = 0; i < houses.length; i++) {
    const house = house[i];
    template += `
      <div style="outline: 1px solid black" class="col-3">
          <p>Address:${house.address}</p>
          <p># of Rooms:${house.numberOfRooms}</p>
          <p>Sq Feet:${house.squareFootage}</p>
          <p>Year:${house.year}</p>
          <p>Price:${house.price}</p>
          <img src="${house.imgUrl}" alt="">
      </div>
      `;
  }
  document.getElementById("houses").innerHTML = template;
}

export default class HouseController {
  constructor() {
    drawHouses();
  }

  addHouse(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target;
    houseService.addHouse(formData);
    formData.reset();
    drawHouses();
  }
}
