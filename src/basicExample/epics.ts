import { Action } from '@reduxjs/toolkit';
import { AxiosObservable } from 'axios-observable';
import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { globalErrorHandler } from '../redux/common/action';
import { EpicDependency } from '../redux/common/interface';
import { getPostSuccess } from './actions';
import { GET_POST } from './constant';
import { Post } from './interfaces';

// epic
export const fetchUserEpic: Epic = (action$:Observable<Action<any>>, state$, dependencies: EpicDependency) => action$.pipe(
  ofType(GET_POST),
  mergeMap(action =>
    (dependencies.axiosInstance.get(`posts`) as AxiosObservable<Post[]>).pipe(
        map((response) => getPostSuccess(response.data)), 
        catchError(error => of(globalErrorHandler("fetchUserEpic", "https://jsonplaceholder.typicode.com/posts1", error))
    )
  ))
);