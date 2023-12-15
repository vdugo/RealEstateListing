import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent }, // Home route displaying properties
  { path: 'login', component: LoginComponent },
  // Add other routes here as needed
  // Example: { path: 'some-other-path', component: SomeOtherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
