import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { OrderComponent } from './app/order/order.component'; 
import { OrderConfirmComponent } from './app/order-confirm/order-confirm.component'; 
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(OrderConfirmComponent, config);

export default bootstrap;
