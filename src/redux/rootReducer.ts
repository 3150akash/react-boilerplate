import {combineReducers} from '@reduxjs/toolkit';
import {basicExampleReducer} from "../basicExample/reducer"
import { globalReducer } from './common/globalReducer';
import { ReducerDictionary } from './common/interface';

const staticReducers = {
    globalReducer,
    basicExampleReducer
  }

export const updateReducer = (asyncReducers?: ReducerDictionary) => {
    return combineReducers({ 
      ...staticReducers,
      ...asyncReducers
    })
  }

export const rootReducer = updateReducer();