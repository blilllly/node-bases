export const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthdate }) => {
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
//# sourceMappingURL=05-factory.js.map