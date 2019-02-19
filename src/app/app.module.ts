import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';
import { createCustomElement } from '@angular/elements';
import { NumberOnlyDirective } from './numbers.directive';
import { StockOrderComponent } from './stock.order.component';
import { MyelementComponent } from './myelement.component';
import { GraphComponent } from './graph.component';


@NgModule({
  declarations: [
    NumberOnlyDirective,
    MyelementComponent,
    StockOrderComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule
  ],
  entryComponents: [
    MyelementComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(MyelementComponent,  {injector: this.injector});
    customElements.define('my-element', el);
  }
}
