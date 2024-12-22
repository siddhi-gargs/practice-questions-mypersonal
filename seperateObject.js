const citiesAndPopulation = { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } };

const minPopulation = function (lookup) {
  return  function (lastCaluPopulation, currentPopulation) {
    return Math.min(lastCaluPopulation, lookup[currentPopulation].population);
  }
}

const findLargeCities = function (cities, lookup) { 
  const thresholdPopulation = cities.reduce(minPopulation(lookup), Infinity);
  return cities.filter(city => lookup[city].population !== thresholdPopulation);
}

console.log(findLargeCities(["London", "Paris", "Tokyo"], citiesAndPopulation));
