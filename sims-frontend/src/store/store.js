import { configureStore } from "@reduxjs/toolkit";
import {studentSlice} from "./slices/studentSlice";
const store=configureStore({
    reducer:{
        students:studentSlice.reducer,
    }
});
export default store;
