import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  constructor() { }
  frm1!: FormGroup;
  ngOnInit(): void {
    this.frm1 = new FormGroup({
      username: new FormControl('teonv',[Validators.required ,Validators.minLength(3), Validators.maxLength(10)]),
      password: new FormControl('123', [Validators.minLength(8)]),
    });
  }
}