import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  ngOnInit() {
    // Where we would call a service that get us the data
    this.title = 'Customers Orders Reports';
  }
}
