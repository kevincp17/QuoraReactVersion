import axios from 'axios'
import config from '../config/config'

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/user/users/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const findOne = async(email)=>{
    try {
        const result = await axios.get(`${config.domain}/user/users/${email}`)
        return result.data
    } catch (error) {
        return error
    }
}

const register = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/user/users/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const login = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/user/login/`,payload)
        return result.data
    } catch (error) {
        return error.message
    }
}

const logout = async()=>{
    try {
        const result = await axios.delete(`${config.domain}/user/logout/`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {list,findOne,register,login,logout}