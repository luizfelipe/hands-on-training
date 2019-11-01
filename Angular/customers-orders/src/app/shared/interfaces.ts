export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerSince: any;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IOrder {
    date: Date;
    customerId: number;
    orderItems: IOrderItem[];
}