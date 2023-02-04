import { Epic } from "redux-observable";
import { epic$, epicRegistry } from "./rootEpic";


export const useInjectEpic = (epic: Epic) => {
    // don't add an epic that is already registered/running
    if (epicRegistry.indexOf(epic) === -1) {
      epicRegistry.push(epic);
      epic$.next(epic);
    }
  };