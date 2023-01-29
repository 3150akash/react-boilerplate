import { Action } from '@reduxjs/toolkit';
import { Epic, ofType } from 'redux-observable';
import { map, mergeMap, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { getPostSuccess } from './actions';
import { GET_POST } from './constant';
import { Post } from './interfaces';

// epic
export const fetchUserEpic: Epic = (action$:Observable<Action<any>>) => action$.pipe(
  ofType(GET_POST),
  mergeMap(action =>
    (ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`) as Observable<Post[]>).pipe(
        map((response: Post[]) => getPostSuccess(response))
    )
  )
);