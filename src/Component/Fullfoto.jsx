import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"

const Fullfoto = () => {
    const item = useSelector((state) => state.post)
    const { id } = useParams()
    const picture = item.find(el => el.id === id)

    return (
        <div>
            <img className="fullphoto" src={picture.picture} alt="КАРТИНКА"></img>
        </div>
    );
}
export default Fullfoto