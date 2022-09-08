import { takeEvery, all } from 'redux-saga/effects';
import * as ActionHomePage from '../Constant/HomePage'


import {
  handleAddAnswer,handleGetAnswer,handleGetOneAnswer,
  handleAddSpace,handleGetSpace,handleGetOneSpace
} from './HomePageSaga'


function *watchAll() {
  yield all([
    takeEvery(ActionHomePage.GET_ANSWER_REQUEST,handleGetAnswer),
    takeEvery(ActionHomePage.ADD_ANSWER_REQUEST,handleAddAnswer),
    takeEvery(ActionHomePage.GETONE_ANSWER_REQUEST,handleGetOneAnswer),

    takeEvery(ActionHomePage.GET_SPACE_REQUEST,handleGetSpace),
    takeEvery(ActionHomePage.ADD_SPACE_REQUEST,handleAddSpace),
    takeEvery(ActionHomePage.GET_SPACE_REQUEST,handleGetOneSpace),
  ])
}

export default watchAll;


