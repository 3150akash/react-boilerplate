import {configureStore} from "@reduxjs/toolkit"
import {createEpicMiddleware} from 'redux-observable'
import { Action, Dispatch } from 'redux'
import { rootEpic } from "./epic";
import { rootReducer } from "./reducer";

const epicMiddleware = createEpicMiddleware();


const store = configureStore({
    reducer : rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(epicMiddleware)
})

epicMiddleware.run(rootEpic);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = (typeof store.dispatch) & Dispatch<{
    payload?: any;
    type: string;
}> 