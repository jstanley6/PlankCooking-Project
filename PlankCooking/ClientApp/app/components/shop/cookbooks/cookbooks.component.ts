import { Component } from "@angular/core";
import { Product } from '../../../models/Product';
import { PlankCookingService } from '../../../services/plankcooking.service';

@Component({
    selector: "shop-cookbooks",
    templateUrl: "./cookbooks.component.html",
    styleUrls: ["./cookbooks.component.css"]
})
export class ShopCookbooksComponent {

    products:Product[];

    constructor(private plankCookingService: PlankCookingService) { 
    
        this.products = [];
    }

    ngOnInit() {
        this.plankCookingService.getCookBooks().subscribe(products => {
            this.products = products;
        });
     }
}