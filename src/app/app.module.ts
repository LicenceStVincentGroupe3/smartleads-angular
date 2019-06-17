import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as Francedepartment from 'fusionmaps/maps/fusioncharts.francedepartment';
import * as CanvasJS from 'canvasjs';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import {ApexCharts} from 'apexcharts';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, FusionMaps, Francedepartment, FusionTheme);

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
    FusionChartsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
