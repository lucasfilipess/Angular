import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isActive: number = 1;

  handleActive(active) {
    this.isActive = active;
  }

  constructor() {}

  ngOnInit(): void {}
}
