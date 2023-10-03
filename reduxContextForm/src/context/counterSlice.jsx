import { createSlice } from "@reduxjs/toolkit";

//createSlice é uma função que aceita chave/valor com
//nome, estado inicial e a ação (reducers)

const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement:  (state) => state - 1,
    reset:  () => 0,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
