import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { Website } from '../../../models/Website';
import { Category } from '../../../models/Category';
import { OrderCart } from '../../../models/OrderCart';
import { PlankCookingService } from '../../../services/plankcooking.service';
import { OrderItem } from '../../../models/OrderItem';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
    selector: 'shop-spicerubs',
    templateUrl: './spicerubs.component.html',
    styleUrls: ['./spicerubs.component.css']
})

export class ShopSpiceRubsComponent implements OnInit {

    products:Product[];
    quantity:OrderItem[];

    constructor(private plankCookingService: PlankCookingService,  private http: HttpClient) { 
    
        this.products = [];
        this.quantity = [];
    }

    ngOnInit() {
        this.plankCookingService.getSpiceRubs().subscribe(products => {
            this.products = products;
        });
     }

     addProduct (qty: number): Observable<OrderItem> {
        console.log("the qty = " + qty);
        
        const httpOptions = {
             headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post<OrderItem>('api/v1/plankcooking/add/spicerubs', qty, httpOptions);
       }
}