import {Component} from '@angular/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HighlightDirective],
})
export class AppComponent {
  color = '';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/