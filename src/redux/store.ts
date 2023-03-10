import {configureStore} from "@reduxjs/toolkit"
import {createEpicMiddleware} from 'redux-observable'
import {  Dispatch } from 'redux'
import { rootEpic } from "./rootEpic";
import { rootReducer } from "./rootReducer";
import {axiosInstance} from "../axios/axios.config";

const epicMiddleware = createEpicMiddleware(
    {dependencies: { axiosInstance }}
);

const store = configureStore({
    reducer : rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(epicMiddleware)
})

epicMiddleware.run(rootEpic);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState> & {[key: string]: any}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = (typeof store.dispatch) & Dispatch<{
    payload?: any;
    type: string;
}> 