const add = function (sprintArray, location) {
  const [sourceAdd1, sourceAdd2, destinationAdd] = [
    sprintArray[location + 1],
    sprintArray[location + 2],
    sprintArray[location + 3],
  ];

  sprintArray[destinationAdd] =
    sprintArray[sourceAdd1] + sprintArray[sourceAdd2];

  return location + 4;
};

const subtractTwoLocationValues = (insArray, location) => {
  const [sourceAdd1, sourceAdd2, destinationAdd] = [
    insArray[location + 1],
    insArray[location + 2],
    insArray[location + 3],
  ];

  insArray[destinationAdd] = insArray[sourceAdd1] - insArray[sourceAdd2];
  return location + 4;
};

const jump = (sprint, location) => {
  const adress = sprint[location + 1];
  console.log("sprint[adress]", sprint[adress]);
  return adress;
};

const isEqual = (sprint, location) => {
  const [comparAdd1, comparAdd2] = [sprint[location + 1], sprint[location + 2]];
  const isBothValuesEqual = sprint[comparAdd1] === sprint[comparAdd2];

  return isBothValuesEqual ? sprint[location + 3] : location + 4;
};

const jumpIflessThan = (sprint, location) => {
  const [comparAdd1, comparAdd2] = [sprint[location + 1], sprint[location + 2]];
  const ifLessThan = sprint[comparAdd1] < sprint[comparAdd2];

  return ifLessThan ? sprint[location + 3] : location + 4;
};

const copy = (sprint, location) => {
  const value = sprint[sprint[location + 1]];
  sprint[sprint[location + 2]] = value;
  return location + 3;
};

const put = (sprint, location) => {
  sprint[sprint[location + 2]] = sprint[location + 1];
  console.log("sprint", sprint);
  return location + 3;
};

const instruction = function (command, sprint, location) {
  const instructions = {
    0: put,
    1: add,
    2: subtractTwoLocationValues,
    3: jump,
    4: isEqual,
    5: jumpIflessThan,
    7: copy,
  };

  if (command in instructions) {
    return instructions[command](sprint, location);
  }

  console.log("Not valid Command");
};

const main = function () {
  const input = prompt("Enter sprint code :");
  const sprintProgram = input.split(" ").map((ins) => +ins);
  sprintProgram.unshift("");
  if (sprintProgram.at(-1) === 0) sprintProgram.pop();

  let location = 1;
  let count = 0;

  while (sprintProgram[location] !== 9) {
    console.log("sprint[location]", sprintProgram[location]);
    location = instruction(sprintProgram[location], sprintProgram, location);

    count++;
  }
  sprintProgram.shift();

  return sprintProgram;
};

console.log(main());

/*
test 

1 2 8 9 2 6 2 7 1 4 5 2  => working but in end giving 0
1 2 8 4 2 6 2 6 1 4 5 2 9  => 

3 9 16 12 10 17 9 0 5 3 4 29 7 3 8 5 8 5 34 5 8 6 39 5 8 7 44 9 7 4 8 3 16 7 5 8 3 20 7 6 8 3 24 7 7 8 3 28


*/
