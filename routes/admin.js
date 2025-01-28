const { Router } = require("express")        
const adminRouter = Router();
const {adminModel} = require("../db")
const {JWT_ADMIN_PASSWORD} = require("../config")
// add three dependencies - bcrypt,zod,jwtTokens


adminRouter.post("/signup", async function(req, res){      //ab userRouter bana chuke hai aur routing kiye hai toh we don't have access of app so userRouter use krenge uske jgah pe 
    const { email, password, firstName, lastName } = req.body

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/course", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.put("/course", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/course/bulk", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}