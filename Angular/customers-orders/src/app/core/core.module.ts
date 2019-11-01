import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SorterService } from './sorter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [ DataService, SorterService ],
  imports: [ HttpClientModule ]
})
export class CoreModule { }
