import * as ActionType from '../Constant/LoginPage'
const INIT_STATE = {
    users: []
}

const LoginPageReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_USER_REQUEST:
            return { ...state }
        case ActionType.GET_USER_SUCCESS:
            return GetUserSucceed(state, action)
        case ActionType.REGISTER_REQUEST:
            return { ...state }
        case ActionType.REGISTER_SUCCESS:
            return RegisterSucceed(state, action)
        case ActionType.LOGIN_REQUEST:
            return { ...state }
        case ActionType.LOGIN_SUCCESS:
            return LoginSuccess(state, action)
        default:
            return state
    }
}

const GetUserSucceed = (state, action) => {
    return {
        ...state,
        users: action.payload
    }
}

const RegisterSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        users : [...state.users,payload]
    }
}


const LoginSuccess = (state, action) => {
    const {payload} = action
    return {
        ...state,
        users : [...state.users,payload]
    }
}

export default LoginPageReduce