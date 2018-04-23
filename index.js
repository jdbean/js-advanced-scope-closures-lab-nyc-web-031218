const produceDrivingRange = function (blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock)
    let tripDistance = Math.abs(start - end)

    if (tripDistance > blockRange) {
      let difference = tripDistance - blockRange
      return `${difference} blocks out of range`
    }
    else {
      let difference = blockRange - tripDistance
      return `within range by ${difference}`
    }
  }
}

const produceTipCalculator = function (percent) {
  return function (bill) {
    return (bill * percent)
  }
}

function createDriver(){
  let driverId = 0
  // return the class
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}

const Driver = createDriver()
