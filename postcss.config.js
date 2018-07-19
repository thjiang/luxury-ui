module.exports = {
    plugins: [
        require('cssnano')({
            autoprefixer: {
                add: true,
                browsers: ['> 5%, last 3 versions']
            }
        })
    ]
};