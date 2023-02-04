import { PayloadAction } from "@reduxjs/toolkit"
import { EPIC_ERROR_OCCURED } from "./constant"
import { GlobalInitialState } from "./interface"

export const globalErrorHandler = (sourceEpic:string, apiUrl: string, errorDetails: {}) :PayloadAction<GlobalInitialState >  => {
return {
    type: EPIC_ERROR_OCCURED,
    payload:{epicErrorCollection :[{sourceEpic, apiUrl, errorDetails: JSON.stringify(errorDetails)}]}
}
}