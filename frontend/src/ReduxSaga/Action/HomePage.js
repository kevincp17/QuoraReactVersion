import * as ActionType from '../Constant/HomePage'

export const GetAnswerRequest = () => ({
    type : ActionType.GET_ANSWER_REQUEST
})

export const GetAnswerSuccess = (payload) => ({
    type : ActionType.GET_ANSWER_SUCCESS,
    payload
})

export const GetAnswerFailed = (payload) => ({
    type : ActionType.GET_ANSWER_FAILED,
    payload
})

export const GetOneUserRequest = (payload) => ({
    type : ActionType.GETONE_USER_REQUEST,
    payload
})

export const GetOneUserSuccess = (payload) => ({
    type : ActionType.GETONE_USER_SUCCESS,
    payload
})

export const GetOneUserFailed = (payload) => ({
    type : ActionType.GETONE_USER_FAILED,
    payload
})

export const AddAnswerRequest = (payload) => ({
    type:ActionType.ADD_ANSWER_REQUEST,
    payload
})

export const AddAnswerSuccess = (payload) => ({
    type:ActionType.ADD_ANSWER_SUCCESS,
    payload
})

export const AddAnswerFailed = (payload) =>({
    type : ActionType.ADD_ANSWER_FAILED,
    payload
})

export const GetOneAnswerRequest = (payload) => ({
    type : ActionType.GETONE_ANSWER_REQUEST,
    payload
})

export const GetOneAnswerSuccess = (payload) => ({
    type : ActionType.GETONE_ANSWER_SUCCESS,
    payload
})

export const GetOneAnswerFailed = (payload) => ({
    type : ActionType.GETONE_ANSWER_FAILED,
    payload
})


export const GetSpaceRequest = () => ({
    type : ActionType.GET_SPACE_REQUEST
})

export const GetSpaceSuccess = (payload) => ({
    type : ActionType.GET_SPACE_SUCCESS,
    payload
})

export const GetSpaceFailed = (payload) => ({
    type : ActionType.GET_SPACE_FAILED,
    payload
})

export const AddSpaceRequest = (payload) => ({
    type:ActionType.ADD_SPACE_REQUEST,
    payload
})

export const AddSpaceSuccess = (payload) => ({
    type:ActionType.ADD_SPACE_SUCCESS,
    payload
})

export const AddSpaceFailed = (payload) =>({
    type : ActionType.ADD_SPACE_FAILED,
    payload
})

export const GetOneSpaceRequest = (payload) => ({
    type : ActionType.GETONE_SPACE_REQUEST,
    payload
})

export const GetOneSpaceSuccess = (payload) => ({
    type : ActionType.GETONE_SPACE_SUCCESS,
    payload
})

export const GetOneSpaceFailed = (payload) => ({
    type : ActionType.GETONE_SPACE_FAILED,
    payload
})

export const LogoutRequest = (payload) => ({
    type : ActionType.LOGOUT_REQUEST,
    payload
})

export const LogoutSuccess = (payload) => ({
    type : ActionType.LOGOUT_SUCCESS,
    payload
})

export const LogoutFailed = (payload) => ({
    type : ActionType.LOGOUT_FAILED,
    payload
})


