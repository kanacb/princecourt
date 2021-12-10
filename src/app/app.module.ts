import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { WaitingtimeComponent } from './pages/waitingtime/waitingtime.component';
import { Adm1Component } from './pages/dashboard/adm1/adm1.component';
import { Adm2Component } from './pages/dashboard/adm2/adm2.component';
import { Adm3Component } from './pages/dashboard/adm3/adm3.component';
// Material Design Modules
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

// Charts
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AdmissionComponent,
    WaitingtimeComponent,
    Adm1Component,
    Adm2Component,
    Adm3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
