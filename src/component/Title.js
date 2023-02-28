import React from 'react'

function Title(props) {
    const {title,description}=props;
  return (
    <div className="text-center">
      <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}


export default Title
Title.defaultProps={
    title:"title",
    description : "collage name is GEC-Rajkot"
}