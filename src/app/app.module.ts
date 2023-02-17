import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './categories/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';
import { LoadingBarComponent } from './loading-bar.component';
import { CategoriesLoadingAsyncComponent } from './categories-loading-async/categories-loading-async.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new.component';
import { SuppliersFormComponent } from './suppliers/suppliers-form/suppliers-form.component';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete.component';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CategoriesComponent,
    DashboardComponent,
    FormComponent,
    AlertConfirmComponent,
    LoadingBarComponent,
    CategoriesLoadingAsyncComponent,
    SuppliersComponent,
    SuppliersListComponent,
    SuppliersEditComponent,
    SuppliersNewComponent,
    SuppliersFormComponent,
    SuppliersDeleteComponent,
    SuppliersShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
