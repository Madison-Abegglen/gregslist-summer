import Car from "../../models/Car.js";

const carsApi = axios.create({
  baseURL: "localhost:3000",

  timeout: 3000
});

export default class CarService {
  constructor() { }

  getCars(draw) {
    carsApi.get().then(res => {
      let cars = res.data.data.map(rawCar => {
        return new Car(rawCar);
      });
      draw(cars);
    });
  }

  addCar(formData, draw) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    });

    carsApi.post("", newCar).then(res => {
      this.getCars(draw);
    });
  }

  deleteCar(carId, draw) {
    carsApi.delete(carId).then(res => {
      this.getCars(draw);
    });
  }

  bid(carId, update, draw) {
    carsApi.put(carId, update).then(res => {
      this.getCars(draw);
    });
  }
}
