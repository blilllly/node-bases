// const { getId, getAge } = require('../plugins');
interface BuildMakerPersonOptions {
  getId: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getId, getAge }: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getId(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: 'Jhon', birthdate: '1998-06-21' };
// const jhon = buildPerson(obj);

// console.log({ jhon });
