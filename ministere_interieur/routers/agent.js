const express = require('express')
const router = express.Router()
const agent = require ("../models/agent")


router.get('/:cin/:password', async(req,res) =>{        
    try{
        const result =await agent.findOne({cin:req.params.cin})
        .then(user =>{
            if(user){
                if(user.password==req.params.password){
                    res.json(user)
            }
                 else res.json()
                }
                else res.json()
            }
            )
    }
    catch(err){
res.send('Error'+err)
    }
})

router.post('/',async(req,res)=> {
    const Agent =new agent({
        cin:req.body.cin,
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        password : req.body.password
            })
    try{
        const i= await Agent.save()
        res.json(i)
    }
    catch(err){
        res.send('Error'+err)
    }
})

module.exports = router