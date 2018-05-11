
export class OrderItem {

    orderItemID: number;
    productID: number;
    orderCartID: number;
    qty: number;

    constructor() {

        this.orderCartID = 0;
        this.productID = 0;
        this.orderItemID = 0;
        this.qty = 0;

    }
}