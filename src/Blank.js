import React from 'react'

function Blank() {
    var a=[
{            "id":1,
            "name":"ajitkumar",
            "surname":"vaghela",
        },{
            "id":2,
            "name":"hardik",
            "surname":"vaghela",
        }]
  return (
    <>
   {

    a.map((e)=>{
        return(
            <h2>{e.name}</h2>
        )
    })

   }
    </>
  )
}

export default Blank