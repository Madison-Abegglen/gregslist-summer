import House from '../../models/House.js'

let houses = []

export default class HouseService {
    constructor() {

    }

    getHouses() {
        let housesCopy = []

        //same as below
        // for (let i = 0; i < cars.length; i++) {
        //   const car = cars[i];

        // }

        // this is just saying for each 'car'
        //  in the whole cars array do whatever is in the code block 
        houses.forEach(house => {
            houseCopy.push(new House(
                house.address,
                house.numberOfRooms,
                house.squareFootage,
                hosue.year,
                house.price,
                house.imgUrl
            ))
        })
        return housesCopy
    }

    addHouse(formData) {
        let newHouse = new House(
            formData.address.value,
            formData.numberOfRooms.value,
            formData.squareFootage.value,
            formData.year.value,
            formData.price.value,
            formData.imgUrl.value
        )
        houses.push(newHouse)
        console.log(houses)

    }
}