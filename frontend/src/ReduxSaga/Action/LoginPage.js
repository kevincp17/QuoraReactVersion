import * as ActionType from '../Constant/LoginPage'

export const GetUserRequest = () => ({
    type : ActionType.GET_USER_REQUEST
})

export const GetUserSuccess = (payload) => ({
    type : ActionType.GET_USER_SUCCESS,
    payload
})

export const GetUserFailed = (payload) => ({
    type : ActionType.GET_USER_FAILED,
    payload
})

export const RegisterRequest = (payload) => ({
    type:ActionType.REGISTER_REQUEST,
    payload
})

export const RegisterSuccess = (payload) => ({
    type:ActionType.REGISTER_SUCCESS,
    payload
})

export const RegisterFailed = (payload) =>({
    type : ActionType.REGISTER_FAILED,
    payload
})

export const LoginRequest = (payload) => ({
    type : ActionType.LOGIN_REQUEST,
    payload
})

export const LoginSuccess = (payload) => ({
    type : ActionType.LOGIN_SUCCESS,
    payload
})

export const LoginFailed = (payload) => ({
    type : ActionType.LOGIN_FAILED,
    payload
})

