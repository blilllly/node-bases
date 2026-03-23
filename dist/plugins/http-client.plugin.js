import axios from 'axios';
export const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
    // get: async (url) => {
    //   const resp = await fetch(url);
    //   return await resp.json();
    // },
    post: async (url, body) => {
        throw new Error('Not implemented');
    },
    put: async (url, body) => {
        throw new Error('Not implemented');
    },
    delete: async (url, body) => {
        throw new Error('Not implemented');
    },
};
//# sourceMappingURL=http-client.plugin.js.map