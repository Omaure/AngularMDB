import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home-page/home-page.component';
import {AddUserComponent} from './components/add-new-user/add-new-user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {EditComponent} from './components/edit-user/edit-user.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UserDetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
