import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrancemapComponent } from './francemap/francemap.component';
import { CommercialMonthComponent } from './commercial-month/commercial-month.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewMailsComponent } from './new-mails/new-mails.component';
import { ActiveOperationsComponent } from './active-operations/active-operations.component';
import { ActiveContactComponent } from './active-contact/active-contact.component';
import { ActiveCompanyComponent } from './active-company/active-company.component';
import { AllMailsComponent } from './all-mails/all-mails.component';
import { AchieveOperationsComponent } from './achieve-operations/achieve-operations.component';
import { OperationsChartComponent } from './operations-chart/operations-chart.component';
import { PerformanceMonitoringComponent } from './performance-monitoring/performance-monitoring.component';
import { PerformanceMonitoringChartComponent } from './performance-monitoring-chart/performance-monitoring-chart.component';
import { ChartQualityComponent } from './chart-quality/chart-quality.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FrancemapComponent,
    CommercialMonthComponent,
    NewContactComponent,
    NewCompanyComponent,
    NewMailsComponent,
    ActiveOperationsComponent,
    ActiveContactComponent,
    ActiveCompanyComponent,
    AllMailsComponent,
    AchieveOperationsComponent,
    OperationsChartComponent,
    PerformanceMonitoringComponent,
    PerformanceMonitoringChartComponent,
    ChartQualityComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
