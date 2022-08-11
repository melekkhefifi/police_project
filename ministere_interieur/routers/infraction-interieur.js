const express = require('express')
const router = express.Router()
const Infraction_interieur = require ("../models/infraction-inter")


router.get('/', async(req,res) =>{
    try{
        const result =await Infraction_interieur.find()
        res.json(result)
    }
    catch(err){
res.send('Error'+err)
    }
})

router.get('/:cin', async(req,res) =>{
    try{
        const result =await Infraction_interieur.find({cin:req.params.cin})
        res.json(result)
    }
    catch(err){
res.send('Error'+err)
    }
})

router.post('/',async(req,res)=> {
    const infraction =new Infraction_interieur({
        cin:req.body.cin,
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        infraction:req.body.infraction
    })
    try{
        const i= await infraction.save()
        res.json(i)
    }
    catch(err){
        res.send('Error'+err)
    }
})

module.exports = router