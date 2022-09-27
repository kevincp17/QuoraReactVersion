import { combineReducers } from 'redux';
import HomePageReduce from './HomePageReducer';
import LoginPageReduce from './LoginPageReducer';


const rootReducer = combineReducers({
  homePageState:HomePageReduce,
  loginPageState:LoginPageReduce
});

export default rootReducer;