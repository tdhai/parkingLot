
import * as fs from 'fs';
import { parkingLot } from './handler'
const Path = 'input.txt'

const main = () => {
  const inputs = fs.readFileSync(Path, 'utf8').split("\n")
  for (let i = 0; i < inputs.length; i++) {
    const items = inputs[i].split(" ")
    parkingLot.process(items)
  }
}

main()