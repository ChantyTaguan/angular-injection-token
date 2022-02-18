import { Component, OnInit } from '@angular/core';
import { ListToken } from '../list.token';

@Component({
  selector: 'app-list',
  providers: [
    {provide: ListToken, useExisting: ListComponent}
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListToken implements OnInit {

  ngOnInit() {
    this.resetValues();
  }

  resetValues() {
    this.values = [
      'aaaa', 'aabb', 'bbcc', 'dddd', 'eeee', 'ffff'
    ];
  }

  filterValues() {
    //Do nothing - end of the line !
    console.log('tada');
  }

}