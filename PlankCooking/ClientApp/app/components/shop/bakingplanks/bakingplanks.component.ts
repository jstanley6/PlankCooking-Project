import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { PlankCookingService } from '../../../services/plankcooking.service';

@Component({
    selector: 'shop-bakingplanks',
    templateUrl: './bakingplanks.component.html',
    styleUrls: ['./bakingplanks.component.css']
})

export class ShopBakingPlanksComponent implements OnInit {
    products:Product[];

    constructor(private plankCookingService: PlankCookingService) { 
    
        this.products = [];
    }

    ngOnInit() {
        this.plankCookingService.getBakingPlanks().subscribe(products => {
            this.products = products;
        });
     }
}