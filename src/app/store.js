import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "../features/counter/counterSllice";
import postReducer from "../features/posts/postSlice";


const store = configureStore({
    reducer:{
        counter : counterReducer,
        posts : postReducer
    }
})

export default store;