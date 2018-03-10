import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LookupComponent } from './lookup/lookup.component';
import { BuildComponent } from './build/build.component';
import { BuildService } from './build.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [
        AppComponent,
        LookupComponent,
        BuildComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        BuildService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
