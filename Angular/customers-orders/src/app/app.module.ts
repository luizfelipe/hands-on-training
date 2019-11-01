import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AppRoutingModule, CustomersModule, OrdersModule, SharedModule, CoreModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
