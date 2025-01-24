const { Router } = require("express")
const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.send({
        message: "signup endpoint"
    })
})

courseRouter.get('/preview', (req, res) => {
    res.send({
        message: "signup endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}