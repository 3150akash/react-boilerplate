import { PayloadAction } from "@reduxjs/toolkit"
import Axios from "axios-observable";

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

export interface EpicDependency{
    axiosInstance: Axios;
}