const postRouter = require('./post')
const authRouter = require('./auth')

function route(app) {
    app.use('/auth', authRouter)
    app.use('/posts', postRouter)
}

module.exports = route
