import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesLoadingAsyncComponent } from './categories-loading-async/categories-loading-async.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete.component';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersFormComponent } from './suppliers/suppliers-form/suppliers-form.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new.component';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories-async',
    component: CategoriesLoadingAsyncComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [
      {
        path: '',
        component: SuppliersListComponent,
      },
      {
        path: 'delete/:id',
        component: SuppliersDeleteComponent,
      },
      {
        path: 'edit/:id',
        component: SuppliersEditComponent,
      },
      {
        path: 'new',
        component: SuppliersNewComponent,
      },
      {
        path: '',
        component: SuppliersFormComponent,
      },
      {
        path: 'show/:id',
        component: SuppliersShowComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
