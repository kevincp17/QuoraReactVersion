import { takeEvery, all } from 'redux-saga/effects';
import * as ActionHomePage from '../Constant/HomePage'
import * as ActionLoginPage from '../Constant/LoginPage'

import {
  handleAddAnswer,handleGetAnswer,handleGetOneAnswer,
  handleAddSpace,handleGetSpace,handleGetOneSpace,
  handleGetOneUser,handleLogout
} from './HomePageSaga'

import {
  handleGetUser,handleLogin,handleRegister
} from './LoginPageSaga'


function *watchAll() {
  yield all([
    takeEvery(ActionHomePage.GET_ANSWER_REQUEST,handleGetAnswer),
    takeEvery(ActionHomePage.ADD_ANSWER_REQUEST,handleAddAnswer),
    takeEvery(ActionHomePage.GETONE_ANSWER_REQUEST,handleGetOneAnswer),

    takeEvery(ActionHomePage.GET_SPACE_REQUEST,handleGetSpace),
    takeEvery(ActionHomePage.ADD_SPACE_REQUEST,handleAddSpace),
    takeEvery(ActionHomePage.GET_SPACE_REQUEST,handleGetOneSpace),

    takeEvery(ActionHomePage.GETONE_USER_REQUEST,handleGetOneUser),
    takeEvery(ActionHomePage.LOGOUT_REQUEST,handleLogout),

    takeEvery(ActionLoginPage.GET_USER_REQUEST,handleGetUser),
    takeEvery(ActionLoginPage.LOGIN_REQUEST,handleLogin),
    takeEvery(ActionLoginPage.REGISTER_REQUEST,handleRegister),
  ])
}

export default watchAll;


