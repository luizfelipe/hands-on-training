import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ OrdersComponent ],
  imports: [ CommonModule, FormsModule, OrdersRoutingModule, SharedModule ]
})
export class OrdersModule { }
