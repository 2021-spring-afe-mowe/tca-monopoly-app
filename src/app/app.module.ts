import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { TransacItemListComponent } from './transac-item-list/transac-item-list.component';
import { TransacItemCardComponent } from './transac-item-list/transac-item-card/transac-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    TransacItemListComponent,
    TransacItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
