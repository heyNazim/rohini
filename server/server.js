    import express from 'express'
    import cors from 'cors'
    import color from 'colors'
    import dotenv from 'dotenv'
    import connectdb from './config/connectDb.js'
    import router from './routes/userRoute.js'
    import adminrouter from './routes/adminRoute.js'

    const app = express()
    dotenv.config()
    app.use(cors())
    app.use(express.json())




    connectdb()

    app.use('/api', router);

    app.use('/api', adminrouter);


    const PORT = 8080
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`.bgWhite)
    })