import { Component ,OnInit ,Output, EventEmitter } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-sanpham-list',
  templateUrl: './sanpham-list.component.html',
  styleUrls: ['./sanpham-list.component.css']
})
export class SanphamListComponent implements OnInit {

  @Output() chonSP = new EventEmitter();

  listSanPham:any;

  constructor(private d:DuLieuService) { }
 
  ngOnInit(): void {
    this.listSanPham = this.d.getSanPham().subscribe ( 
      data => this.listSanPham= data
    );

  }

  suaSP(sp:any){
    console.log(sp);    
    this.chonSP.emit(sp);
  }

  xoaSP(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaSanPham(id).subscribe(data => alert('Xóa thành công'))
    }
}
}
