import House from '../../models/House.js'

let houses = []

export default class HouseService {
    constructor() {

    }

    getHouses() {
        let housesCopy = []

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