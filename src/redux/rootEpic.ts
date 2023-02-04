import { Action } from "@reduxjs/toolkit";
import {combineEpics, Epic, StateObservable} from "redux-observable";
import { BehaviorSubject, mergeMap, Observable } from "rxjs";
import { fetchUserEpic } from "../basicExample/epics";

export const epicRegistry: Epic[] = [fetchUserEpic];
export const preLoadedCombinedEpic = combineEpics(...epicRegistry);
export const epic$ = new BehaviorSubject(preLoadedCombinedEpic);

export const rootEpic = (action$: Observable<Action<any>>, store$: StateObservable<void>, dependencies: any) => epic$.pipe(mergeMap(epic => epic(action$, store$, dependencies)))

