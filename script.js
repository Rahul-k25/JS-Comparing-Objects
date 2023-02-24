function excludeBy(peopleList, excluded, property){
    let excludedValues = excluded.map(obj => obj[property]);
    return peopleList.filter(obj => !excludedValues.includes(obj[property]));
}

const users = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
  },
  {
      name: "Anna",
      surname: "Ivanova",
      gender: "female",
      age: 22
  }]
const users2 = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
}]

const result = excludeBy(users, users2, 'name');
console.log(result)