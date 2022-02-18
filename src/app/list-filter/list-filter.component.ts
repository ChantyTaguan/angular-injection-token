import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ListToken } from '../list.token';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-filter',
  providers: [
    {provide: ListToken, useExisting: ListFilterComponent}
  ],
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent extends ListToken implements OnInit, AfterContentInit {

  search = '';

  @ContentChild(ListToken) list: ListToken;

  ngOnInit() {
  }

  ngAfterContentInit() {
    if(this.list) {
      this.values = this.list.values;
    }
  }

  filterValues() {
    this.list.values = this.values.filter(val => val.includes(this.search));
    this.list.filterValues();
  }

  resetValues() {
    this.list.resetValues();
    this.values = this.list.values;
  }

}