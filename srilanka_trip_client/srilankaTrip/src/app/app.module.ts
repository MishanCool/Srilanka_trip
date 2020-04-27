import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { from } from 'rxjs';

// components
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


// Services
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot()

  ],
  providers: [
    AuthenticationService,
    ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
