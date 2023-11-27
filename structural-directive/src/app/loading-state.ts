export type Loaded<T> = { type: 'loaded', data: T };

export type Loading = { type: 'loading' };

export type LoadingState<T> = Loaded<T> | Loading;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/