import {call,put} from 'redux-saga/effects'
import apiUser from '../../api/api-user'
import { 
    GetUserSuccess,GetUserFailed,RegisterSuccess,RegisterFailed,LoginSuccess,LoginFailed
} from '../Action/LoginPage'


function* handleGetUser(){
    try {
        const result = yield call(apiUser.list)
        yield put(GetUserSuccess(result))
    } catch (error) {
        yield put(GetUserFailed(error))
    }
}

function* handleRegister(action){
    const {payload} = action
    try {
        const result = yield call(apiUser.register,payload)
        yield put(RegisterSuccess(result.data))
    } catch (error) {
        yield put(RegisterFailed(error))
    }
}

function* handleLogin(action){
    const {payload} = action
    try {
        const result = yield call(apiUser.login,payload)
        yield put(LoginSuccess(result.data))
    } catch (error) {
        yield put(LoginFailed(error))
    }
}

export {
    handleGetUser,
    handleRegister,
    handleLogin
}