import { PayloadAction } from "@reduxjs/toolkit"
import { type } from "os"

export interface EpicError {
    sourceEpic: string,
    apiUrl: string,
    errorDetails: string
}

export interface GlobalInitialState {
    epicErrorCollection ?:EpicError[]
}

export type GenericReducer = (state: any, action: PayloadAction<any>) => any;

export type ReducerDictionary = {[key: string]:GenericReducer}