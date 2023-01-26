import React, {useInsertionEffect, useState} from 'react';
import s from '../styles/MessagesBoard.module.css'
import MessageForm from "@/components/messageForm";

const MessagesBoard = ({data}) => {
    const [messages, setData] = useState([...data])
    const [isReverse, setReverse] = useState(true)

    const handleClick = () => {
        setReverse(!isReverse)
        setData([...messages].reverse());
    }
    const updateMessages=(messages)=>{
        setData(messages)
    }
    return (
        <div>
            <div className={s.form}>
                <MessageForm updateMessages={updateMessages}/>
            </div>
            <div className={s.tableNames}>
                <div>Author</div>
                <div>Text</div>
            </div>
            <div className={s.btnContainer}>
                <button className={s.sortBtn} onClick={handleClick}>{isReverse? 'first added' : 'last added'}</button>
            </div>
            <div>
                {messages.map((el,index) => (
                    <div key={index} className={s.row}>
                        <div className={s.author}>{el.author}</div>
                        <div className={s.text}>{el.text}</div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default MessagesBoard;
