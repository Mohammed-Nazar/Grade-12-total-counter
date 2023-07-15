import "./main.css"
import { useState } from "react"

export default function Main(){
    const [data, setData] = useState({
        gr10: "",
        gr11: "",
        gr12:""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <>
        <div className="main">
            <input onChange={handleChange} value={data.gr10} name="gr10" placeholder="معدل العاشر" type="number" />
            <input onChange={handleChange} value={data.gr11} name="gr11" placeholder="معدل الحادي عشر" type="number" />
            <input onChange={handleChange} value={data.gr12} name="gr12" placeholder="معدل الثاني عشر" type="number"/>
            <div className="total">
               Total: {data.gr10 * 0.1 + data.gr11 * 0.1 + data.gr12 * 0.8}
            </div>
        </div>
        </>
    )
}