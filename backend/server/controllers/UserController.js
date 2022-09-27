import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
const getUsers = async(req, res) => {
    try {
        const users = await req.context.models.users.findAll({
            attributes:['user_id','name','email']
        });
        return res.send(users);
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOneUser=async (req,res)=>{
    try{
        const users=await req.context.models.users.findOne({
            where:{email:req.params.email}
        })
        return res.send(users)
    }catch(error){
        return res.status(404).send(error)
    }
}
 
const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(404).send({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await req.context.models.users.create({
            name: name,
            email: email,
            password: hashPassword,
            username:name
        });
        return res.send("Registration Successful");
    } catch (error) {
        return res.status(404).send(error)
    }
}
 
const Login = async(req, res) => {
    try {
        const user = await req.context.models.users.findAll({
            where:{
                email: req.body.email
            }
        });
        console.log(user);
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].user_id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await req.context.models.users.update({refresh_token: refreshToken},{
            where:{
                user_id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        return res.send({ accessToken });
    } catch (error) {
        console.log('salah');
        return res.status(404).send(error)
    }
}
 
const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await req.context.models.users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].user_id;
    await req.context.models.users.update({refresh_token: null},{
        where:{
            user_id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.send(200);
}

export default{
    getUsers,
    findOneUser,
    Register,
    Login,
    Logout
}