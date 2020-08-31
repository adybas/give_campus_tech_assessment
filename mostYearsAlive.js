function mostYearsAlive(arr) {
    const yearAlive = {}
    
    for (let years of arr){
      const yearsRange = createRange(years[0], years[1])
      for (let year of yearsRange){
        yearAlive[year] ? yearAlive[year] += 1 : yearAlive[year] = 1
      }
    }
  
    return findMaxValues(yearAlive).map(Number)
}
  
function createRange(birthYear, deathYear){
   return Array(deathYear - birthYear + 1).fill().map((_, index) => birthYear + index)
}
  
function findMaxValues(yearAliveHash){
    const maxValue = Object.keys(yearAliveHash).reduce((acc, value) => Math.max(acc, yearAliveHash[value]), 0)
    return Object.keys(yearAliveHash).filter(value => yearAliveHash[value] === maxValue)
}