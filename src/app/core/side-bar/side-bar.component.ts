import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  //Inputs
  @Input() Data: any;

  //Variables
  openSidebar: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
