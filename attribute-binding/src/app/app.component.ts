import {Component} from '@angular/core';
import {CompWithHostBindingComponent} from './comp-with-host-binding.component';
import {MyInputWithAttributeDecoratorComponent} from './my-input-with-attribute-decorator.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CompWithHostBindingComponent, MyInputWithAttributeDecoratorComponent],
})
export class AppComponent {
  actionName = 'Create and set an attribute';
  isSpecial = true;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'border: solid red 3px';
  color = 'blue';
  border = '.5rem dashed black';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/