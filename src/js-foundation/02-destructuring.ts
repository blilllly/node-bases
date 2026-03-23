// console.log(process.env);

const { windir, USERDOMAIN } = process.env;

// console.table({ windir, USERDOMAIN });

export const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [, , , batman] = characters;

// console.log(batman);
