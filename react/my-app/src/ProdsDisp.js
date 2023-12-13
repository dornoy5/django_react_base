import React from 'react'
import { Outlet } from 'react-router-dom'

const ProdsDisp = (props) => {
  return (
    <div>
        {props.prod.desc}
        {props.prod.price}
        <Outlet></Outlet>
    </div>
  )
}

export default ProdsDisp