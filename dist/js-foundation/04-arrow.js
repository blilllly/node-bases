const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];
export const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(undefined, user) : callback(`USUARIO NO ENCONTRADO ${id}`);
};
//# sourceMappingURL=04-arrow.js.map