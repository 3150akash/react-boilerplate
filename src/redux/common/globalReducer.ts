import { PayloadAction } from "@reduxjs/toolkit"
import { EPIC_ERROR_OCCURED } from "./constant"
import { GlobalInitialState } from "./interface"

const globalInitialState:GlobalInitialState  = {
    epicErrorCollection: []
}

export const globalReducer = (state = globalInitialState, action: PayloadAction<GlobalInitialState >) => {
    switch(action.type){
        case EPIC_ERROR_OCCURED : 
        if(state.epicErrorCollection && action.payload.epicErrorCollection)
            {
                const updatedEpicErrorCollection = [...state.epicErrorCollection, ... action.payload.epicErrorCollection] 
                console.log(updatedEpicErrorCollection)
                state = { epicErrorCollection : updatedEpicErrorCollection}
            }
            return state
        default:
            return state
    }
}