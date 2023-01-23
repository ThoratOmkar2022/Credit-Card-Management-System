import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/rootReducer";
// import { createStore } from 'redux'


const store = configureStore({
  reducer: rootReducer
});

// const store = createStore(rootReducer)


export default store;