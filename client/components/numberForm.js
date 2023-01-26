import React, {useRef, useState} from 'react';
import s from '../styles/NumberForm.module.css'
import axios from "axios";

const NumberForm = ({updateResult}) => {
    const numRef = useRef()
    const [errMessage, setErrMessage] = useState('')

    function handleClick() {
        if (numRef.current.value) {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/number/add`, {
                number: +numRef.current.value
            })
                .then(res => {
                    if(res.data){
                        setErrMessage('')
                        updateResult(res.data)
                    }

                })
                .catch(e => {
                    setErrMessage(e.message)
                    console.log(e)
                    if (e.response.data.message) {
                        setErrMessage(e.response.data.message)
                    }
                })
        }
    }

    return (
        <div className={s.inputContainer}>
            <input ref={numRef} className={s.input} type="number"/>
            <button onClick={handleClick} className={s.addBtn}>Add number</button>
            {errMessage && <div className={s.errMsg}>{errMessage}</div>}
        </div>
    );
};

export default NumberForm;
