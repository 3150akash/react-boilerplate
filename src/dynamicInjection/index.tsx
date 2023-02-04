import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useInjectEpic } from "../redux/injectEpic";
import { useInjectReducer } from "../redux/injectReducer";
import { RootState, AppDispatch } from "../redux/store";
import { getPost } from "./actions";
import { dynamicInjectionFetchUserEpic } from "./epics";
import { Post } from "./interfaces";
import { dynamicInjectionReducer, DynamicInjectionState } from "./reducer";

export const DynamicInjection = () => {
    useInjectEpic(dynamicInjectionFetchUserEpic);
    useInjectReducer(`${dynamicInjectionReducer.name}`, dynamicInjectionReducer);
    const dispatch = useDispatch<AppDispatch>() 
    const posts: Post[] = useSelector((store:DynamicInjectionState) => store.dynamicInjectionReducer.posts )
    // 
    useEffect(() => {
        dispatch(getPost());
    }, [])
    
    useEffect(() => {
        console.log(posts);
    }, [posts])
    
return <div>
    <ul>
        {posts.map((current) => <li key = {current.id}> {current.title} ̰</li>)}
         <li>This is just a test Render</li>
    </ul>
</div>

}


