const express = require('express');
const dotenv = require('dotenv');
const PORT =4000;
const app = express();
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('Connected to MongoDB')).catch(err => console.log(err));


app.use('/api/auth',authRoute);
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute);
app.use('/api/categories',categoryRoute)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})