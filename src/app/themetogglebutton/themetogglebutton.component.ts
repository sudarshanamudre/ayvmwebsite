import { Component, OnInit } from '@angular/core';
import { AyvmServiceService } from '../ayvm-service.service';

@Component({
  selector: 'app-themetogglebutton',
  templateUrl: './themetogglebutton.component.html',
  styleUrls: ['./themetogglebutton.component.css']
})
export class ThemetogglebuttonComponent implements OnInit {

  constructor(private themeService: AyvmServiceService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
