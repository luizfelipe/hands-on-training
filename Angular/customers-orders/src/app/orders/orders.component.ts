import { Component, OnInit } from '@angular/core';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  customer: ICustomer;
  orders: IOrder[];

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let customerId = +this.activatedRoute.snapshot.paramMap.get('customerId');

    this.dataService.getCustomer(customerId).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });

    this.dataService.getOrders(customerId).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });
  }

}
