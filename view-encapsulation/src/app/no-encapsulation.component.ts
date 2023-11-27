import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="emulated-message">No encapsulation</div>
  `,
  styles: ['h2, .emulated-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/