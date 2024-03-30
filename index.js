
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
  };
  console.log(returnFirstTwoDrivers(drivers))
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
  };
  console.log(returnLastTwoDrivers(drivers))
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
 
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer
    };
  };
  
  
  const fareDoubler = createFareMultiplier(2)
  
  
  const fareTripler = createFareMultiplier(3)
  
  
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers)
  }
  
  
  