import express from 'express'
import {registerUser, loginUser, userCredts, paymentRazorpay} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredts)
userRouter.post('/pay-razor', userAuth, paymentRazorpay)

export default userRouter