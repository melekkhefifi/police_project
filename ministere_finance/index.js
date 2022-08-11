const express = require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const url = 'mongodb://mongo/minstere-finance'
const app = express()
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
   })
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}));
   const FinanceRouter =require('./routers/infraction-finance.js')
   app.use('/finance',FinanceRouter )
app.listen(8000, () => {
    console.log('server started')
})