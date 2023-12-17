
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const dotenv = require('dotenv')
dotenv.config()

const password =  process.env.PASSWORD
const CONNECTION_URL =`mongodb+srv://cande2003:${password}@cluster0.wlqaceu.mongodb.net/BienestarSport?retryWrites=true&w=majority`


mongoose.connect(CONNECTION_URL,
   {
    useNewUrlParser: true,
  
   }).then(() =>{
      console.log('conexion exitosa!')
  })
  .catch((err) =>{
      console.error(err)
  })
module.exports = mongoose