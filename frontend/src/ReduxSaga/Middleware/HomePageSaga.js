import {call,put} from 'redux-saga/effects'
import apiAnswer from '../../api/api-answer'
import apiSpace from '../../api/api-space'
import { 
    GetAnswerSuccess,GetAnswerFailed,AddAnswerSuccess,AddAnswerFailed,GetOneAnswerSuccess,GetOneAnswerFailed,
    GetSpaceSuccess,GetSpaceFailed,AddSpaceSuccess,AddSpaceFailed,GetOneSpaceSuccess,GetOneSpaceFailed 
} from '../Action/HomePage'


function* handleGetAnswer(){
    try {
        const result = yield call(apiAnswer.list)
        yield put(GetAnswerSuccess(result))
    } catch (error) {
        yield put(GetAnswerFailed(error))
    }
}

function* handleAddAnswer(action){
    const {payload} = action
    try {
        const result = yield call(apiAnswer.create,payload)
        yield put(AddAnswerSuccess(result.data))
    } catch (error) {
        yield put(AddAnswerFailed(error))
    }
}

function* handleGetOneAnswer(action){
    const {payload} = action
    try {
        const result = yield call(apiAnswer.findOne,payload)
        yield put(GetOneAnswerSuccess(result))
    } catch (error) {
        yield put(GetOneAnswerFailed(error))
    }
}


function* handleGetSpace(){
    try {
        const result = yield call(apiSpace.list)
        yield put(GetSpaceSuccess(result))
    } catch (error) {
        yield put(GetSpaceFailed(error))
    }
}

function* handleAddSpace(action){
    const {payload} = action
    try {
        const result = yield call(apiSpace.create,payload)
        yield put(AddSpaceSuccess(result.data))
    } catch (error) {
        yield put(AddSpaceFailed(error))
    }
}

function* handleGetOneSpace(action){
    const {payload} = action
    try {
        const result = yield call(apiSpace.findOne,payload)
        yield put(GetOneSpaceSuccess(result))
    } catch (error) {
        yield put(GetOneSpaceFailed(error))
    }
}

export {
    handleGetAnswer,
    handleAddAnswer,
    handleGetOneAnswer,

    handleGetSpace,
    handleAddSpace,
    handleGetOneSpace
}