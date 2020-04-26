import * as assert from 'assert';
import { parkingLot } from './handler'
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
      const result = parkingLot.mapper(wrongInputCommand)
      assert.equal(result ,Error)
    })    

    it("wrong carId when pard", ()=>{
      const result = parkingLot.mapper(wrongCarIdPark)
      assert.equal(result ,Error)
    })    

    it("wrong carId when leave", ()=>{
      const result = parkingLot.mapper(wrongCarIdLeave)
      assert.equal(result ,Error)
    })    
    
    it("wrong size when create", ()=>{
      const result = parkingLot.mapper(wrongSizeCreate)
      assert.equal(result ,Error)
    })    
  })

  describe("happy case", ()=>{
    it("should be successfull", ()=>{
    let result
    for (let i = 0; i < niceInputs.length; i++) {
      const items = niceInputs[i].split(" ")
      result = parkingLot.mapper(items)
    }
    assert.deepEqual(result ,expectResult)
    })
  })
})