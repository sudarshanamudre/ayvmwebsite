import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemetogglebuttonComponent } from '../themetogglebutton/themetogglebutton.component';
import { AyvmServiceService } from '../ayvm-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router, public service :AyvmServiceService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToSearch(){
    this.router.navigate(['/search']);
  }
 
 
}
