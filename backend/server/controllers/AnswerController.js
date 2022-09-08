import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const answers=await req.context.models.answers.findAll({
            include: { all: true }
        })
        return res.send(answers)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const answers=await req.context.models.answers.findOne({
            where:{answer_id:req.params.id}
        })
        return res.send(answers)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const spaces=await req.context.models.spaces.create({
            content:req.body.content,
            view:req.body.view,
            upvote:req.body.upvote,
            downvote:req.body.downvote,
            bookmark:req.body.bookmark,
            answer_user_id:req.body.answer_user_id,
            question_answer_id:req.body.question_answer_id
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