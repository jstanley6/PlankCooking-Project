
export class Product {
   
    productID: number;
    categoryID: number;
    name: string;
    description: string;
    price: number;
    priceDescription: string;
    sortOrder: number;
    active: boolean;
    ounces: number;
    imagePath: string;
    handlingCost: number;
    taxExempt: boolean;
    sKU: string;


    constructor() {

        this.productID = 0;
        this.categoryID = 0;
        this.name = "";
        this.description = "";
        this.price = 0;
        this.priceDescription = "";
        this.sortOrder = 0;
        this.active = false;
        this.ounces = 0;
        this.imagePath = "";
        this.handlingCost = 0;
        this.taxExempt = false;
        this.sKU = "";

    }
}