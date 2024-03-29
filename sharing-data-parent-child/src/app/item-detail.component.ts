import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  standalone: true,
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
})

export class ItemDetailComponent {
  @Input() item = ''; // decorate the property with @Input()
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/