import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const spaces=await req.context.models.spaces.findAll({
            include: { all: true }
        })
        return res.send(spaces)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const spaces=await req.context.models.spaces.findOne({
            where:{space_id:req.params.id}
        })
        return res.send(spaces)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const spaces=await req.context.models.spaces.create({
            name:req.body.name
        })
        return res.send(spaces)
    }catch(error){
        return res.status(404).send(error)
    }
}


export default{
    findAll,
    findOne,
    create
}