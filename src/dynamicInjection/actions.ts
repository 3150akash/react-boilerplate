import { GET_POST, GET_POST_FAILED, GET_POST_SUCCESS } from "./constant"
import { Post } from "./interfaces"

export const getPost = () => {
    return {
        type: GET_POST
    }
}

export const getPostSuccess = (posts:Post[]) => {
    return {
        type: GET_POST_SUCCESS, 
        payload: posts
    }
}

export const getPostFailed = () => {
    return {
        type: GET_POST_FAILED
    }
}