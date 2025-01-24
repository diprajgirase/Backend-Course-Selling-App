const { Router } = require("express")
const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.send({
        message: "signup endpoint"
    })
})

userRouter.post('/signin', (req, res) => {
    res.send({
        message: "signin endpoint"
    })
})

userRouter.get('/purchases', (req, res) => {
    res.send({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}