import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const boardSlice = createSlice({
     name: 'boards',
     initialState,
     reducers : {
          addBoard: (state,action)=>{
               alert('리듀서 내부에서 할일은 ?'+ action.payload.board)
               const board ={id: new Date(), task :action.payload.board,completed:false}
               state.push(board)
          }
     
     }
})
export const {addBoard} = boardSlice.actions
export default boardSlice.reducer