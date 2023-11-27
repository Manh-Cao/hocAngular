import {Component, ViewEncapsulation} from '@angular/core';
import {NoEncapsulationComponent} from './no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.None,
  imports: [NoEncapsulationComponent],
})
export class EmulatedEncapsulationComponent {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/