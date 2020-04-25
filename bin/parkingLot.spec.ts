import * as assert from 'assert';
import {parkingLot} from './parkingLot'
import {
  wrongInputCommand, 
  wrongCarIdPark, 
  wrongCarIdLeave, 
  wrongSizeCreate, 
  niceInputs, 
  expectResult
} from './testData'

describe('#ParkingLot test case', ()=>{
  describe("bad case", ()=>{
    it("wrong input command", ()=>{
      const result = parkingLot.process(wrongInputCommand)
      assert.equal(result ,Error)
    })    

    it("wrong carId when pard", ()=>{
      const result = parkingLot.process(wrongCarIdPark)
      console.log("!23123123asd", result)
      assert.equal(result ,Error)
    })    

    it("wrong carId when leave", ()=>{
      const result = parkingLot.process(wrongCarIdLeave)
      assert.equal(result ,Error)
    })    
    
    it("wrong size when create", ()=>{
      const result = parkingLot.process(wrongSizeCreate)
      assert.equal(result ,Error)
    })    
  })

  describe("happy case", ()=>{
    it("should be successfull", ()=>{
    let result
    for (let i = 0; i < niceInputs.length; i++) {
      const items = niceInputs[i].split(" ")
      result = parkingLot.process(items)
    }
    assert.deepEqual(result ,expectResult)
    })
  })
})