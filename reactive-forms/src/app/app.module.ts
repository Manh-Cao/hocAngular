import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LaptopThemComponent } from './laptop-them/laptop-them.component';


@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    LaptopThemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
