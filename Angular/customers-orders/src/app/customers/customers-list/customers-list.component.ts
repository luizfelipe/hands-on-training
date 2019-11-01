import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];

  @Input() get customers(): ICustomer[]{
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if(value){
      this.filteredCustomers = this._customers = value;
      this.calculateCustomersOrderTotal();
    }
  }

  filteredCustomers: any[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor(private sortService: SorterService) {
  }

  ngOnInit() {
  }

  calculateCustomersOrderTotal() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;
    })
  }

  filter(data: string) {
    if(data){
      this.filteredCustomers = this.customers.filter((customer: ICustomer) => {
        return customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                customer.orderTotal.toString().indexOf(data) > -1;
      });
    }
    else {
      this.filteredCustomers = this.customers;
    }
    this.calculateCustomersOrderTotal();
  }

  sort(prop: string) {
    this.sortService.sort(this.filteredCustomers, prop);
  }
}
