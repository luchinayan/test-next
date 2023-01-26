import React, {useRef} from 'react';
import s from '../styles/MessageForm.module.css'
import axios from "axios";

const MessageForm = ({updateMessages}) => {
    const authorRef = useRef(null)
    const textRef = useRef(null)

    function sendMessage() {
        if (textRef.current.value && authorRef.current.value) {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/message/add`,
                {
                    text: textRef.current.value,
                    author: authorRef.current.value,
                })
                .then(res => {
                    updateMessages(res.data)
                    textRef.current.value = ''
                    authorRef.current.value = ''
                })
                .catch((e) => {
                    console.log(e)
                })
        }

    }

    return (
        <div className={s.inputContainer}>
            <input ref={authorRef} className={s.author} type="text" placeholder={'Author'}/>
            <input ref={textRef} className={s.text} type="text" placeholder={'Text'}/>
            <button onClick={sendMessage} className={s.Btn}>Add message</button>
        </div>
    );
};

export default MessageForm;
