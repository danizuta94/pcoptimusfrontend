
const env = {
    api: {
        root: 'http://localhost:3000/api',

        article: {
            index: '/article'
        },

        categorias: {
            index: '/category',
            store: '/category'
        },

        testimonios: {
            index: '/testimonios'
        },

        auth: {
            login: '/auth/login'
        }
    }
};



module.exports = env;