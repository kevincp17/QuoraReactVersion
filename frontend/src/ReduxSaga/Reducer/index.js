import { combineReducers } from 'redux';
import HomePageReduce from './HomePageReducer';

const rootReducer = combineReducers({
  homePageState:HomePageReduce
});

export default rootReducer;