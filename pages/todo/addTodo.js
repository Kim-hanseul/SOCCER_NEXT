import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/reducers/todoReducer.ts';
import tableStyles from '../common/styles/table.module.css'
export default function addTodo(){

    const [todo, setTodo] = useState({
        userid:'', task:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setTodo({...todo,[name]: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            alert(' 진행 1: 일정등록 클릭 ');
            dispatch(todoActions.taskRequest(todo))
            setTodo({
                userid:'', task:''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>일정 등록</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자 이름</b></td>
                    <td><input type="text" name='userid' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>할 일</b></td>
                    <td><input type="text" name='task' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit"> 일정 등록 </button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>
}