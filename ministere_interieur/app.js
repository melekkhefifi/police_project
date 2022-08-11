const express = require('express')
const mongoose =require('mongoose')
const cors = require ('cors')
const url = 'mongodb://mongo3/minstere-interieur'
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
   const InterieurRouter =require('./routers/infraction-interieur')
   const AgentRouter =require('./routers/agent')
   app.use('/agent',AgentRouter)
   app.use('/interieur',InterieurRouter )
   
app.listen(9001, () => {
    console.log('server started')
})