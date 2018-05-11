import { Component, OnInit } from '@angular/core';
import { PlankCookingService } from '../../../services/plankcooking.service';
import { Product } from '../../../models/Product';

@Component({
    selector: 'shop-bbqplanks',
    templateUrl: './bbqplanks.component.html',
    styleUrls: ['./bbqplanks.component.css']
})

export class ShopBbqPlanksComponent implements OnInit {

    products:Product[];

    constructor(private plankCookingService: PlankCookingService) { 
    
        this.products = [];
    }

    ngOnInit() {
        this.plankCookingService.getBbqPlanks().subscribe(products => {
            this.products = products;
        });
     }
}