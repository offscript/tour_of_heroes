import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
	title = 'Tour of Heroes';
	hero = 'Windstorm';
	name = 'Angular'; }
