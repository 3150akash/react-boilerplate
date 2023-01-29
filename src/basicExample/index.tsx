import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getPost } from "./actions";
import { Post } from "./interfaces";

export const BasicExample = () => {
    const posts: Post[] = useSelector((store:RootState) => store.basicExampleReducer.posts )
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getPost());
    }, [])

    console.log(posts);
return <div>
    <ul>
        {posts.map(current => <li key = {current.id}> {current.title} ̰</li>)}
         <li>This is just a test Render</li>
    </ul>
</div>

}


