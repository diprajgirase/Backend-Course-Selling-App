const { Router } = require("express")
const adminRouter = Router();

admin Router.post('/signin', (req, res) => {
    res.send({
        message: "signin endpoint"
    })
})

adminRouter.get('/signup', (req, res) => {
    res.send({
        message: "signup endpoint"
    })
})

adminRouter.post('/courses', (req, res) => {
    res.send({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}