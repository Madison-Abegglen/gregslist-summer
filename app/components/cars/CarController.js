import CarService from "./CarService.js";

let carService = new CarService();

function drawCars(cars) {
  let template = "";
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${car.make}</p>
        <p>${car.model}</p>
        <p>${car.price}</p>
        <button onclick="app.controllers.carController.bid('${car._id}', ${
      car.price
    })">Bid</button>
        <p>${car.year}</p>
        <p>${car.description}</p>
        <img src="${car.imgUrl}" alt="somethingelse">
        <button onclick="app.controllers.carController.deleteCar('${
          car._id
        }')">Delete car</button>
    </div>
    `;
  }

  document.getElementById("cars").innerHTML = template;
}

export default class CarController {
  constructor() {
    carService.getCars(drawCars);
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target;
    carService.addCar(formData, drawCars);
    formData.reset();
  }

  deleteCar(carId) {
    carService.deleteCar(carId, drawCars);
  }

  bid(carId, price) {
    let update = {
      price: price + 100
    };
    carService.bid(carId, update, drawCars);
  }
}
