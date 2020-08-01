import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware
});
