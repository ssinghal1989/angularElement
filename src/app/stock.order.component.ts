import { Component, ViewEncapsulation} from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { PlaceOrderService } from './app.placeOrderService';


@Component({
    selector: 'app-stock-order',
    templateUrl: './stock.order.component.html',
    styleUrls: ['./stock-order.css'],
    providers: [PlaceOrderService],
    encapsulation: ViewEncapsulation.Native
})

export class StockOrderComponent {
    actions = ['Buy', 'Sell'];
    orderForm = this.fb.group({
        action: ['Buy'],
        quantity: ['', Validators.required],
        product: ['', Validators.required],
        price: ['', Validators.required]
    });
    constructor(private fb: FormBuilder, private placeOrderService: PlaceOrderService) { }

    placeOrder() {
        this.placeOrderService.placeOrder(this.orderForm.value).subscribe(
            data => {
                this.orderForm.setValue({
                    action: 'Buy',
                    quantity: '',
                    product: '',
                    price: ''
                });
                alert('Order placed successfully!');
            }
        )
    }
}