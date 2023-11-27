import { Component, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-in-the-metadata',
  template: `
  <p>Latest clearance item: {{clearanceItem}}</p>

  <button type="button" (click)="buyIt()"> Buy it with an Output!</button>
  `,
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InTheMetadataComponent  {


  buyEvent = new EventEmitter<string>();
  clearanceItem = '';

  buyIt() {
    console.warn('Child says: emitting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/