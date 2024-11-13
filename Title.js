import React from 'react'

function Title({name, roomNo, empId}) {
  return (
    <div> 
      <h1 style= {{color: "red"}} > {name}, {roomNo}, {empId} </h1>
    </div>
  )
}

export default Title
