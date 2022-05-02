import React from "react"
import "./Button.css"

export default function Button(props) {

    console.log(props)
    const { variant, children } = props
    
    return (
      <button className={`button ${variant}`}>
        {children}
      </button>
    )
}
