import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { from } from 'rxjs';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
