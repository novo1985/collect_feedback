import { combineReducers } from 'redux';
import { reducer as ruduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: ruduxForm,
  surveys: surveysReducer
});
