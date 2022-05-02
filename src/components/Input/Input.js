import React from "react";
import "./Input.css"

export default function Input(props) {

    console.log(props)

    return (
        <input className={props.variant} type="text" />
    )
}