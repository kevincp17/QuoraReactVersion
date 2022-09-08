import * as ActionType from '../Constant/HomePage'

const INIT_STATE = {
    answers: [],
    answer:[],

    spaces: [],
    space:[]
}

const HomePageReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_ANSWER_REQUEST:
            return { ...state }
        case ActionType.GET_ANSWER_SUCCESS:
            return GetAnswerSucceed(state, action)
        case ActionType.ADD_ANSWER_REQUEST:
            return { ...state }
        case ActionType.ADD_ANSWER_SUCCESS:
            return AddAnswerSucceed(state, action)
        case ActionType.GETONE_ANSWER_REQUEST:
            return { ...state }
        case ActionType.GETONE_ANSWER_SUCCESS:
            return GetOneAnswerSuccess(state, action)

            case ActionType.GET_SPACE_REQUEST:
                return { ...state }
            case ActionType.GET_SPACE_SUCCESS:
                return GetSpaceSucceed(state, action)
            case ActionType.ADD_SPACE_REQUEST:
                return { ...state }
            case ActionType.ADD_SPACE_SUCCESS:
                return AddSpaceSucceed(state, action)
            case ActionType.GETONE_SPACE_REQUEST:
                return { ...state }
            case ActionType.GETONE_SPACE_SUCCESS:
                return GetOneSpaceSuccess(state, action)
        default:
            return state
    }
}

const GetAnswerSucceed = (state, action) => {
    return {
        ...state,
        answers: action.payload
    }
}

const GetOneAnswerSuccess = (state, action) => {
    return {
        ...state,
        answer: action.payload
    }
}

const AddAnswerSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        answers : [...state.answers,payload]
    }
}


const GetSpaceSucceed = (state, action) => {
    return {
        ...state,
        spaces: action.payload
    }
}

const GetOneSpaceSuccess = (state, action) => {
    return {
        ...state,
        space: action.payload
    }
}

const AddSpaceSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        spaces : [...state.spaces,payload]
    }
}

export default HomePageReduce