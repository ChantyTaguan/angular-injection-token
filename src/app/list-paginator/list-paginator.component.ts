import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ListToken } from '../list.token';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-paginator',
  providers: [
    {provide: ListToken, useExisting: ListPaginatorComponent}
  ],
    templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.css']
})
export class ListPaginatorComponent extends ListToken implements OnInit, AfterContentInit {

  @ContentChild(ListToken) list: ListToken;
  max!: number;

  ngOnInit() {}

  ngAfterContentInit() {
    this.values = this.list.values;
  }

  limitChanged(max: number | null) {
    this.max = max;
    this.filterValues();
  }

  resetValues() {
    this.list.resetValues();
    this.values = this.list.values;
  }

  filterValues() {
    if (this.max) {
      this.list.values = this.values.slice(0, this.max);
    }
    else {
      this.list.values = this.values;
    }
    this.list.filterValues();
  }


}