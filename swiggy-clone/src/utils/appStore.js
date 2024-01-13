import { configureStore } from "@reduxjs/toolkit";
import car from './slice'
let myrtkstore=configureStore({
    reducer:car
})

export default myrtkstore;