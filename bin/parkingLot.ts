
import * as fs from 'fs';
const Path = 'input.txt'

class ParkingLot {
  parkingTemp = [];
  count = 0
  slot = 0
  
  private create_parking_lot = (rows: string[]) => {
    if(!rows[1]){
      console.log("Invalid number size of parking slot")
      throw Error;
    }

    console.log(`Created parking lot with ${rows[1]} slots`)
    for (let i = 0; i < Number(rows[1]); i++) {
      console.log(`Allocated slot number: ${i + 1}`)
    }
    this.slot = Number(rows[1]);
  }

  private park = (rows: string[]) => {
    if(rows[1] === undefined){
      console.log("Invalid carId")
      throw Error;
    }

    this.count++;
    if (this.count > this.slot) {
      console.log("Sorry, parking lot is full")
      return;
    }
    const condition = this.parkingTemp.find(item => item === null)
    if (condition === null) {
      const index = this.parkingTemp.indexOf(null);
      this.parkingTemp[index] = rows[1];
        console.log(`Allocated slot number: ${index + 1}`)
      
    } else {
      this.parkingTemp.push(rows[1]);
    }
  }

  private leave = (rows: string[]) => {
    if(!rows[1]){
      console.log("Invalid carId")
      throw Error;
    }

    this.count--;
    const time = Number(rows[2]);
    const money = time <= 2 ? 10 : 10 + (time - 2) * 10;
    const index = this.parkingTemp.indexOf(rows[1]);
    if (index > -1) {
      console.log(`Registration number ${rows[1]} with Slot Number ${index + 1} is free with Charge ${money}`)
      this.parkingTemp[index] = null;
    }else {
      console.log(`Registration number ${rows[1]} not found`)
      return;
    }
  }

  private status = () => {
    console.log("Slot No. Registration No.")
    this.parkingTemp.forEach((item, index) => {
      if(item !== null){
        console.log(`${index + 1} ${item}`)
      }      
    })
    return this.parkingTemp;
  }

  public process = ((rows: string[]) => {
    const mapping = {
      "create_parking_lot": this.create_parking_lot,
      "park": this.park,
      "leave": this.leave,
      "status": this.status
    }
    if (rows[0] !== "create_parking_lot" &&
      rows[0] !== "park" &&
      rows[0] !== "leave" &&
      rows[0] !== "status") {
      console.log("Invalid command")
      return Error;
    }
    try{
      const command = rows[0];
      return mapping[command](rows);
    }catch(err){
      return Error;
    }
  })
}

const main = () => {
  const parkingLot = new ParkingLot()
  const inputs = fs.readFileSync(Path, 'utf8').split("\n")
  for (let i = 0; i < inputs.length; i++) {
    const items = inputs[i].split(" ")
    parkingLot.process(items)
  }
}

main()
