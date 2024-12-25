const people = [
  {
    name: "rahul",
    profession: "software engineer",
    age: 35,
    "emplyoment status": "employed",
    city: "pune",
    hobbies: [
      {
        category: "playing chess",
        specifics: "gardening",
      },
      {
        category: "reading",
        specifics: "murder mystery",
      },
    ],

    hasCar: true,
    studied: "computer science",

    pets: [
      {
        type: "dog",
        petName: "max",
        years: 4,
        vaccinated: "fully",
        "loves doing": ["fetch"],
      },
      {
        type: "parrot",
        petName: "kiwi",
        years: 7,
        vaccinated: "fully",
        "loves doing": ["mimics her Voice"],
      },
    ],
  },
  {
    name: "ananya",
    profession: "graphic designer",
    age: 30,
    "emplyoment status": "employed",
    city: "Bangalore",
    hobbies: [
      {
        category: "cooking",
        specifics: "try Italian recepies",
      },
    ],

    hasCar: false,
    studied: "computer science",

    pets: [
      {
        type: "cat",
        petName: "kiwi",
        years: 3,
        vaccinated: "half",
        "loves doing": ["mimics her Voice"],
      },
    ],
  },
  {
    name: "ramesh",
    profession: "bussiness Man",
    age: 45,
    "emplyoment status": "unemployed",
    city: "jaipur",
    hobbies: [
      {
        category: "gardening",
        specifics: "tending rose garden",
      },
      {
        category: "reading",
        specifics: "historical fiction",
      },
    ],

    hasCar: true,
    studied: "management",

    pets: [
      {
        type: "cat",
        petName: "bella",
        years: 5,
        vaccinated: "fully",
        "loves doing": ["lounging in sun"],
      },
      {
        type: "cat",
        petName: "leo",
        years: 6,
        vaccinated: "fully",
        "loves doing": ["lounging in sun"],
      },
    ],
  },
  {
    name: "kavya",
    profession: "dancer",
    age: 50,
    "emplyoment status": "unemployed",
    city: "chennai",
    hasCar: false,
    studied: "arts",
    hobbies: [
      {
        category: "binge-watching",
        specifics: "sci-fi",
      },

      {
        category: "reading",
        specifics: "fantasy novels",
      },
    ],

    pets: [
      {
        type: "rabbit",
        petName: "snowy",
        years: 3,
        vaccinated: "half",
        "loves doing": ["hopping around backyard", "nibbling on carrots"],
      },
    ],
  },
];

const display = console.log;

//Ques1. How many individuals are currently employed?

const employed = function (people) {
  return people.filter(
    ({ "emplyoment status": emplyoment }) => emplyoment === "employed"
  ).length;
};

// display("Currently employed people: ", employed(people));

//Ques2. How many people own a car?

const howManyhasCar = function (people) {
  return people.filter(({ hasCar }) => hasCar).length;
};

// display("How many people has car: ", howManyhasCar(people));

const extractCity = function (people, specificCity) {
  return people.filter(({ city }) => city === specificCity);
};

// display(extractCity(people, "chennai"));

const noOfPetFullyVaccinated = function (accumulatedCount, person) {
  display("accumulatedCount", accumulatedCount, "person", person.pets);
  // const vaccinatedAnimal = person.pets.filter(({ pets }) => {
  //   display("pets", pets);
  //   pets.map((pet) => pet.vaccinated === "fully").length;
  // });

  console.log("pets" in person);
  if (!"pets" in person) {
    return accumulatedCount;
  }

  const vaccinatedAnimal = person.pets.filter(
    (pet) => pet.vaccinated === "fully"
  ).length;
  console.log(vaccinatedAnimal);
  return accumulatedCount + vaccinatedAnimal;
};

const howManyPetsFullyVacinated = function (people) {
  return people.reduce(noOfPetFullyVaccinated, 0);
};

// display("Animals fully Vaccinated: ", howManyPetsFullyVacinated(people));

const nameAndType = function ({ type, petName }) {
  return { type, petName };
};

const nameAndTypeOfAnimal = function (people) {
  const { pets } = people;
  // console.log("pets", pets);
  return people.map(({ pets }) => {
    // display(pets);
    pets.map(nameAndType).flat();
  });
};

// console.log("name And type", nameAndTypeOfAnimal(people));

const cities = function (people) {
  return people.map(({ name, city }) => ({ name, city }));
};

const hobbies = function (people) {
  const hobby = people.map(({ hobbies }) => ({ hobbies })).flat();
  return [hobby.length, hobby];
};

const noOfpetsEach = function (accuPets, currentPersonPet) {
  return accuPets + currentPersonPet.pets.length;
};

const petsOfUnemployed = function (people) {
  const unemployed = people.filter(
    ({ "emplyoment status": employ }) => employ === "unemployed"
  );
  return unemployed.reduce(noOfpetsEach, 0);
};

// Ques 8 What is the average age of the individuals mentioned in the passage?

const sumOfAllages = function (accuSum, number) {
  return accuSum + number;
};

const averageAge = function (people) {
  const individualAges = people.map((person) => person.age);
  return individualAges.reduce(sumOfAllages, 0) / individualAges.length;
};

// Ques9 How many individuals have studied computer science, and how many of them have pets?

const calculateHaveCompSci = function (previousCount, person) {
  const doesHaveBoth =
    person.studied === "computer science" && person.pets.length > 0;
  return doesHaveBoth ? previousCount + 1 : previousCount;
};

const studiedCsciAndHavePets = function (people) {
  return people.reduce(calculateHaveCompSci, 0);
};

// Ques10. How many individuals own more than one pet?

const moreThan1Pet = function (people) {
  return people.reduce((count, person) => {
    return person.pets.length > 1 ? count + 1 : count;
  }, 0);
};

// Ques11. Which pets are associated with specific favorite activities?

const individualPetDetail = function (person) {
  return person.pets.map((pet) => [pet.petName, pet["loves doing"]]);
};

const petsSpecificActivity = function (people) {
  return people.map(individualPetDetail);
};

// Ques12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petInSpecifiedPlace = function (person) {
  return person.pets.map((pet) => pet.type);
};

const petFromChennaiOrBengalore = function (people) {
  const petInChennaiOrBangalore = people.filter(
    (person) => person.city === "Bangalore" || person.city === "chennai"
  );
  return petInChennaiOrBangalore.map(petInSpecifiedPlace);
};

//Ques 13. How many vaccinated pets belong to people who do not own a car?

const countVaccinated = function (count, person) {
  const noOfvacinatedPet = person.pets.filter(
    (pet) => pet.vaccinated.length > 0
  ).length;
  return noOfvacinatedPet + count;
};

const vaccinatedPetnotOwncar = function (people) {
  const notOwnCar = people.filter((person) => person.hasCar);
  return notOwnCar.reduce(countVaccinated, 0);
};

// Ques 14. What is the most common type of pet among the group?

const removeDuplicates = function (array, currentAnimal) {
  if (!array.includes(currentAnimal)) {
    array.push(currentAnimal);
  }

  return array;
};

const makeObject = function (existingObject, pet) {
  if (existingObject[pet]) {
    existingObject[pet] += 1;
  } else {
    existingObject[pet] = 1;
  }

  return existingObject;
};

const mostOccuring = function (lookup) {
  return function (maxOccur, currentAnimal) {
    return Math.max(lookup[currentAnimal], maxOccur);
  };
};

const commonType = function (people) {
  console.log("-----------------------------");
  const allpets = people.flatMap((person) => person.pets);
  const allAnimals = allpets.map((pet) => pet.type);
  const unique = allAnimals.reduce(removeDuplicates, []);
  const keepInobjects = allAnimals.reduce(makeObject, {});
  const mostOccur = unique.reduce(mostOccuring(keepInobjects), -Infinity);
  return unique.filter((pet) => keepInobjects[pet] === mostOccur);
};

// Ques 15. How many individuals have more than two hobbies?

const increIfMoreThan2Hobby = function (count, person) {
  return person.hobbies.length > 2 ? count + 1 : count;
};

const haveMoreThan2Hobbies = function (people) {
  return people.reduce(increIfMoreThan2Hobby, 0);
};

// Ques 19. 9. How many individuals live in cities starting with the letter "B"?

const increIfStayInCityStartWithB = function (cityStartWith) {
  return function (count, { city }) {
    return city[0] === cityStartWith ? count + 1 : count;
  };
};

const stayInCityStartB = function (people, cityWith) {
  return people.reduce(increIfStayInCityStartWithB(cityWith), 0);
};

display("people live in city start with B", stayInCityStartB(people, "B"));

// Ques 20. Which individuals do not own any pets?

const isSomeOneHasNoPet = function (people) {
  const personWhichHasNoPet = people
    .filter(({ pets }) => pets.length === 0)
    .map(({ name }) => ({ name }));

  return personWhichHasNoPet.length ? personWhichHasNoPet : "EveryOne has";
};

display("isSomeoneHasNoPet", isSomeOneHasNoPet(people));

// console.log("individuals cites", cities(people));
// console.log("hobbies", hobbies(people));
// console.log("pets belong to unemployed", petsOfUnemployed(people));
// console.log("average age of people", averageAge(people));
// console.log("studied computer science", studiedCsciAndHavePets(people));
// console.log("how many have more than one pet", moreThan1Pet(people));
// console.log("pets with specific property", petsSpecificActivity(people));
// console.log(
//   "animal belong to chennai or bengalore",
//   petFromChennaiOrBengalore(people)
// );
// console.log(
//   "vaccinated pets from people not own Car",
//   vaccinatedPetnotOwncar(people)
// );
// console.log("have more than 2 hobbies", haveMoreThan2Hobbies(people));
// console.log("most common type animal", commonType(people));
