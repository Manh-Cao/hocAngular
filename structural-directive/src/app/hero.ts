export interface Hero {
    id: number;
    name: string;
    emotion?: string;
  }
  
  export const heroes: Hero[] = [
    { id: 1, name: 'Dr. Nice', emotion: 'happy'},
    { id: 2, name: 'RubberMan', emotion: 'sad' },
    { id: 3, name: 'Windstorm', emotion: 'confused' },
    { id: 4, name: 'Magneta'}
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */