import { GenericReducer, ReducerDictionary } from "./common/interface";
import { updateReducer } from "./rootReducer";
import store from "./store";
const globalReducerDictionary : ReducerDictionary = {};

export const useInjectReducer = (key: string, asyncReducer:GenericReducer) => {
  if(!globalReducerDictionary[key])
  {
    globalReducerDictionary[key] = asyncReducer
  const updatedReducer = updateReducer(globalReducerDictionary);
  store.replaceReducer(updatedReducer)
  }
}