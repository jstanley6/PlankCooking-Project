import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

//Cart
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from "./components/cart/checkout/checkout.component";
import { PreviewComponent } from "./components/cart/preview/preview.component";
import { ReceiptComponent } from "./components/cart/reciept/receipt.component";


//Shop
import { ShopComponent } from "./components/shop/shop.component";
import { ShopCookbooksComponent } from "./components/shop/cookbooks/cookbooks.component";
import { ShopBakingPlanksComponent } from "./components/shop/bakingplanks/bakingplanks.component";
import { ShopBbqPlanksComponent } from "./components/shop/bbqplanks/bbqplanks.component";
import { ShopNutDriverComponent } from "./components/shop/nutdriver/nutdriver.component";
import { ShopSpiceRubsComponent } from "./components/shop/spicerubs/spicerubs.component";
import { SideMenuComponent } from "./components/shop/sidemenu.component";
import { PlankCookingService } from './services/plankcooking.service';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,

        CartComponent,

        ShopComponent,
        ShopCookbooksComponent,
        ShopBakingPlanksComponent,
        ShopBbqPlanksComponent,
        ShopNutDriverComponent,
        ShopSpiceRubsComponent,
        SideMenuComponent,
        CheckoutComponent,
        PreviewComponent,
        ReceiptComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'Home', pathMatch: 'full' },
            { path: 'Home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: "cart", component: CartComponent },
            { path: "Cart", component: CartComponent },
            { path: "Cart/Checkout", component: CheckoutComponent },
            { path: "Cart/Preview", component: PreviewComponent },
            { path: "Cart/Receipt", component: ReceiptComponent },
            { path: "shop", component: ShopComponent },
            { path: "Shop", component: ShopComponent },
            { path: "Shop/CookBooks", component: ShopCookbooksComponent },
            { path: "Shop/BakingPlanks", component: ShopBakingPlanksComponent },
            { path: "Shop/BbqPlanks", component: ShopBbqPlanksComponent },
            { path: "Shop/NutDriver", component: ShopNutDriverComponent },
            { path: "Shop/SpiceRubs", component: ShopSpiceRubsComponent },
            { path: "Shop/SideMenu", component: SideMenuComponent },
            { path: '**', redirectTo: 'Home' }
        ])
    ],
    providers: [
        PlankCookingService
    ]
})
export class AppModuleShared {
}
