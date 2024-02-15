import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AyvmServiceService {

  darkTheme: boolean = false;

  constructor() { }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    console.log("IN SERVICE");
    
  }

  getCurrentTheme(): string {
    return this.darkTheme ? 'dark' : 'light';
  }
}
