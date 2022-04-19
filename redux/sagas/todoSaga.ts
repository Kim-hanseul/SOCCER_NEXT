import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer.ts';
import { postTodo } from '../api/todoApi.ts';


interface AddTodoType{
    type: string;
    payload: {
        userid : string, task: string
    }
}
interface AddTodoSuccessType{
    type: string;
    payload: {
        userid : string
    }
}
function* addTodo(todo: AddTodoType){
    try{
        alert(' 진행 3: Saga 내부 진입 성공 ' + JSON.stringify(todo))
        const response: AddTodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.taskSuccess(response))
       
    }catch(error){
        alert('진행 3: Saga 내부 진입 실패')
        yield put(todoActions.taskFailure(error))
    }
}
export function* watchTodo(){
    yield takeLatest(todoActions.taskRequest, addTodo)
}