import axios from "axios";
import style from "board/style/board.module.css"
import React,{useState} from 'react'
import { addBoard } from "../../redux/reducers/board.reducer";
import { useDispatch } from "react-redux";

export default function AppBoard(){
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <form onSubmit={e => {
                    e.preventDefault()
                    alert('value?'+value)
                    if(value) dispatch(addBoard({board:value}))
          }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">Title</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} autoComplete="off"
                id="title" name="title" onChange= {e=>setValue(e.target.value)} placeholder="enter contents"/>
                </div>
            </div>
    <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"/>
            </div>
            <button onClick={ () => {history.back('/'); } } >back</button>
            <div><span id="result-span">result</span></div>
            </form>
            </div>
    </>)
    }