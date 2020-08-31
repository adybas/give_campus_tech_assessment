function continuousNumbers(arr){
    if (arr.length <= 1) return arr.length
  
    let continuousCount = 1
    let aPointer = 0
    let bPointer = 1
    
    while (bPointer < arr.length){
      if (arr[aPointer] === arr[bPointer]){
        bPointer += 1
        continuousCount = Math.max((bPointer - aPointer), continuousCount)
      } else {
        aPointer = bPointer
        bPointer += 1
      }
    }
    return continuousCount
}

module.exports = continuousNumbers;