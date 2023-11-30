import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-laptop-them',
  templateUrl: './laptop-them.component.html',
  styleUrls: ['./laptop-them.component.css']
})
export class LaptopThemComponent implements OnInit {
  constructor(private fbuilder:FormBuilder) { }
  frm1!:FormGroup;
  ngOnInit(): void {
    this.frm1 =  this.fbuilder.group({
      tenlt:['', Validators.required],
      gialt: ['', [Validators.min(0), Validators.max(1000000000)]],
      nhasx:['', Validators.min(1)],
      status:['', Validators.required],
      kmbalo:[true],   kemoffile:[false],  kmchuot:[true]
    })
  }
  ngDoCheck(){ console.log(this.frm1);}
}