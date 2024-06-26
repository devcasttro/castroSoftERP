import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductNewPageRoutingModule } from './product-new-routing.module';
import { ProductNewPage } from './product-new.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ProductNewPageRoutingModule
  ],
  declarations: [ProductNewPage]
})
export class ProductNewPageModule {}
