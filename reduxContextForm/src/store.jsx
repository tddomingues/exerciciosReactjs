import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./context/counterSlice"

const store = configureStore({
   reducer: {
      count: counterSlice
   }
})

export default store
