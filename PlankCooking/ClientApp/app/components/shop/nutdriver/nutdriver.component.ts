import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { PlankCookingService } from '../../../services/plankcooking.service';

@Component({
    selector: 'shop-nutdriver',
    templateUrl: './nutdriver.component.html',
    styleUrls: ['./nutdriver.component.css']
})

export class ShopNutDriverComponent implements OnInit {
    products:Product[];

    constructor(private plankCookingService: PlankCookingService) { 
    
        this.products = [];
    }

    ngOnInit() {
        this.plankCookingService.getNutdriver().subscribe(products => {
            this.products = products;
        });
     }
}