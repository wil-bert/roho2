
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent {
  events: string[] = [];
  open!: boolean;
}







