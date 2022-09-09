import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Post = ({ post }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: "ADD_POST",
            paylode: {
                id: post.id,
                picture: post.urls.raw
            }
        })
    })

    return (
        <div >
            Aвтор: {post.user.name}
            <br></br>
            {post.description !== null ? <div>Название: {post.description}</div> : 'Нет названия'}
            <br></br>
            <NavLink to={'/fullphoto/' + post.id}> <img width="5%" src={post.urls.thumb} alt="КАРТИНКА"></img></NavLink>
            <br></br>
            <br></br>
        </div>
    );
}
export default Post