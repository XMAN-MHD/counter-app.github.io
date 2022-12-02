import { configureStore } from '@reduxjs/toolkit';
import counterNumberReducer from '../features/counterNumber/counterNumberSlice';

export const store = configureStore({
  reducer: {
    counterNumber: counterNumberReducer,
  },
});
