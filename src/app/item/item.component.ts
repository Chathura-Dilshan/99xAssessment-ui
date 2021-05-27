import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent) {
  }

}
