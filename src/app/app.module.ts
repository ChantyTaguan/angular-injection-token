import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListPaginatorComponent } from './list-paginator/list-paginator.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ListComponent, ListPaginatorComponent, ListFilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
