import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home-page/home-page.component';
import {AddUserComponent} from './components/add-new-user/add-new-user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {EditComponent} from './components/edit-user/edit-user.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addnewuser', component: AddUserComponent},
  {path: 'userdetails/:id', component: UserDetailsComponent},
  {path: 'userdetails/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
