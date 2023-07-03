import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

// import reducers


export default combineReducers({
  form: formReducer,
  
});
