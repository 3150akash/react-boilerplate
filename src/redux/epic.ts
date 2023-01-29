import { Action } from "@reduxjs/toolkit";
import {combineEpics, Epic, StateObservable} from "redux-observable";
import { BehaviorSubject, mergeMap, Observable } from "rxjs";
import { fetchUserEpic } from "../basicExample/epics";

const epicRegistry: Epic[] = [fetchUserEpic];
const preLoadedCombinedEpic = combineEpics(...epicRegistry);
const epic$ = new BehaviorSubject(preLoadedCombinedEpic);

export const rootEpic = (action$: Observable<Action<any>>, store$: StateObservable<void>, dependencies: any) => epic$.pipe(mergeMap(epic => epic(action$, store$, dependencies)))

export const registerEpic = (epic: Epic) => {
    // don't add an epic that is already registered/running
    if (epicRegistry.indexOf(epic) === -1) {
      epicRegistry.push(epic);
      epic$.next(epic);
    }
  };