import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"contacts",
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path:"about",
    loadComponent:()=> import('./pages/about/about.component').then(m=>m.AboutComponent) // lazy-load standalone component
  },
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
