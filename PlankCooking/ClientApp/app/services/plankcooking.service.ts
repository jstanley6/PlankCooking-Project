import { Injectable } from '@angular/core';
import { Website } from '../models/Website';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { OrderCart } from '../models/OrderCart';
import { OrderItem } from '../models/OrderItem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PlankCookingService {

    products:Product[];

    getProducts():Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/v1/plankcooking')
    }

    getSpiceRubs():Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/v1/plankcooking/spicerubs')
    }

    getBakingPlanks():Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/v1/plankcooking/bakingplanks')
    }

    getCookBooks():Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/v1/plankcooking/cookbooks')
    }

    getBbqPlanks():Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/v1/plankcooking/bbqplanks')
    }

    getNutdriver():Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/v1/plankcooking/nutdriver')
    }

    addQuantity (quantity: OrderItem): Observable<OrderItem> {
        console.log(quantity);
        console.log(quantity.orderItemID);
         const httpOptions = {
             headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.post<OrderItem>('api/v1/plankcooking/add/spicerubs', quantity, httpOptions)
       }

    constructor(private httpClient: HttpClient) { 
        this.products = [];
    }

    getProduct(productID:number):Product {
        let product = this.products.find(s => s.productID == productID);

        if(product != null) {
            return product
        } else {
            return {
                productID:0,
                categoryID: 0,
                name: "",
                description: "",
                price: 0,
                priceDescription: "",
                sortOrder: 0,
                active: false,
                ounces: 0,
                imagePath: "",
                handlingCost: 0,
                taxExempt: false,
                sKU: ""

            }
        }
    }
}