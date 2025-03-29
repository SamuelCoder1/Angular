import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public name:string ="Samuel";
  public nameModified:string ="";

  changeName() {
    this.nameModified = this.name + " Modified"
  }
}
