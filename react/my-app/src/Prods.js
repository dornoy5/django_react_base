import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Outlet } from 'react-router-dom'
import ProdsDisp from './ProdsDisp'

const Prods = () => {
    const myServer = "http://127.0.0.1:8000/prods"
    // console.log("dor");
    const [data, setdata] = useState([])
    const [refresh, setrefresh] = useState(true)
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)

    useEffect(() => {
        axios.get(myServer).then((response) => setdata(response.data))
    }, [refresh])

    const addProduct=()=>{
        axios.post(myServer,{desc,price}).then(() => 
        setrefresh(!refresh))
      }
    

    const delProduct = (id) => {
        axios.delete(myServer+ "/" +id).then(() =>
        setrefresh(!refresh))
    }
    const updProduct = (id) => {
        axios.put(myServer+ "/" +id,{desc,price}).then(() => 
        setrefresh(!refresh))
    }

    return (
        <div>
            <div>
                {/* להביא את הנתונים לכדי מערך ולהציג אותם */}
                {data.map((prod, ind) => <div key={ind}>{prod.desc},{prod.price}
                <button onClick={()=> updProduct(prod.id)}>upd</button>
                <button onClick={()=> delProduct(prod.id)}>del</button></div>)}

                {/* ליצור מערך של הנתונים שקיבלנו ולייצא אותם לפרופס בקומפוננטה אחרת */}
                {/* {data.map((prod, ind) => <ProdsDisp key={ind} prod={prod}></ProdsDisp>)} */}


                Desc: <input onChange={(e) => setdesc(e.target.value)}></input>
                price : <input onChange={(e) => setprice(e.target.value)}></input>
                <button onClick={addProduct}>add</button>
                
            </div>
            

            <Outlet></Outlet>
        </div>
    )
}

export default Prods