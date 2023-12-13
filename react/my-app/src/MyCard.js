import React from 'react'

const MyCard = (props) => {
  return (
    <div><br/>
        {props.name}{" "}
        {props.age}
    </div>
  )
}

export default MyCard