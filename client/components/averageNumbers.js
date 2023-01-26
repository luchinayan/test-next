import React, {useEffect, useState} from 'react';
import axios from "axios";
import NumberForm from "@/components/numberForm";
import s from '../styles/Numbers.module.css'

const AverageNumbers = () => {
    const [result, setResult] = useState()
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/number/result`)
            .then(res => {
                setResult(res.data)
                setLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })
    }, [])

    const updateResult = (data) => {
        setResult([data, ...result])
    }
    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <NumberForm updateResult={updateResult}/>
            <div className={s.tableNames}>
                <div>Last Added</div>
                <div>Previous Number</div>
                <div>Average</div>
            </div>
            {result && result.map((el, index) => (
                <div key={index} className={s.row}>
                    <div className={s.lastAdded}>{el.lastAdded}</div>
                    <div className={s.prevNumber}>{el.prevNumber}</div>
                    <div className={s.average}>{el.average}</div>
                </div>
            ))}
        </div>
    );
};

export default AverageNumbers;
