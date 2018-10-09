import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegisterFormComponent} from './register/register-form/register-form.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './main/main/main.component';
import { RegisterMainComponent } from './register/register-main/register-main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        RegisterFormComponent,
        MainComponent,
        RegisterMainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
