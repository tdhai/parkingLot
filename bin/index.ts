
import * as fs from 'fs';
const path = "input.txt"

// class create_parking_lot {
//     public state: string;
//     public slot: number
// }

// class pard {
//     public state: string;
//     public cardId: string
// }

// class leave {
//     public state: string;
//     public cardId: string
//     public timeOut: number
// }

const create_parking_lot = (slot: number) => {
    console.log(`Created parking lot with ${slot} slots`)
    return
}

const park = (slot: number) => {
    for (let z = 1; z <= slot; z++) {
        console.log(`Allocated slot number: ${z}`)
    }
    return
}

const main = () => {
    const input = fs.readFileSync(path, 'utf8').split("\n")
    let parkingLots = []
    let slot = 0
    let location
    for (let i = 0; i < input.length; i++) {
        const array = input[i].split(" ");
        for (let j = 0; j < array.length; j++) {
            if (array[j] === "create_parking_lot") {
                slot = Number(array[j + 1])
                create_parking_lot(slot)
            }

            if (array[j] === "park") {
                // const index = parkingLots.indexOf(undefined)
                // console.log("123123", index)
                parkingLots.push(array[j + 1])
                // parkingLots.splice(index,0,array[j + 1])
                for (const item of parkingLots) {
                    if (parkingLots.indexOf(item) + 1 > slot){
                        parkingLots.pop()
                        console.log("Sorry, parking lot is full")
                        break;
                    }
                }
                console.log(`Allocated slot number: ${parkingLots.indexOf(array[j + 1]) + 1}`)
            }

            if (array[j] === "status") {
                console.log("Slot No. Registration No.")
                for (const item of parkingLots) {
                    console.log((parkingLots.indexOf(item) + 1) + " " + item)
                }
            }

            if (array[j] === "leave") {
                const time = Number(array[j + 2])
                const money = time <= 2 ? 10 : 10 + (time - 2) * 10
                const isCar = parkingLots.includes(array[j+1])
                if (!isCar) {
                    console.log(`Registration number ${array[j+1]} not found`)
                    break
                }
                console.log(`Registration number ${array[j + 1]} with Slot Number ${parkingLots.indexOf(array[j + 1]) + 1} is free with Charge ${money}`)
                parkingLots.splice(parkingLots.indexOf(array[j + 1]), 1)
                // parkingLots.splice(parkingLots.indexOf(array[j + 1]),0, undefined)
            }
        }
    }
}
console.log(main())