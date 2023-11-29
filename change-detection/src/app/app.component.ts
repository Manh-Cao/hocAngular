import { Component,  NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  products = [
    { id: 1, name: 'Sản phẩm 1' },
    { id: 2, name: 'Sản phẩm 2' },
    { id: 3, name: 'Sản phẩm 3' },
    { id: 4, name: 'Sản phẩm 4' },
    // ... thêm các sản phẩm khác
  ];

  constructor( private ngZone: NgZone) {}
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => setInterval(() => {
      console.log('Run tasks outside NgZone');
    }) )
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}
