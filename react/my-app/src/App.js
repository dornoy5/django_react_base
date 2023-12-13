import React from 'react'
// import Calcutor from './Calcutor'
// import MyCard from './MyCard'
import Prods from './Prods'
import Home from './Home'
import { Link } from 'react-router-dom'

const App = () => {
  // const mydata = [{ name: "dor", age: "29" },
  // { name: "adi", age: "29" },
  // { name: "enav", age: "29" },
  // { name: "dana", age: "29" }]

  // const myprods = [{ desc: "milk", price: "12" }, { desc: "bread", price: "12" }]


  return (
    <div>App
      {/* <Calcutor />
      {mydata.map(usr => <MyCard name={usr.name} age={usr.age}></MyCard>)} */}
      {/* {myprods.map(product => <Prods desc={product.desc} price={product.price}></Prods>)} */}
      <Prods></Prods>
      <Home/>
      <Link to='/home' onClick={<Home/>}></Link>
      
    </div>
  )
}

export default App
