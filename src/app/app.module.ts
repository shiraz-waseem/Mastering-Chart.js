import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/app-layout/header/header.component';
import { SideNavComponent } from './components/app-layout/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterOutlet } from '@angular/router';
import { LatestVideoComponent } from './components/dashboard/latest-video/latest-video.component';
import { PublishedVideosComponent } from './components/dashboard/published-videos/published-videos.component';
import { LatestCommentsComponent } from './components/dashboard/latest-comments/latest-comments.component';
import { AudienceChartComponent } from './components/dashboard/audience-chart/audience-chart.component';
import { SubscribersWatchtimeChartComponent } from './components/dashboard/subscribers-watchtime-chart/subscribers-watchtime-chart.component';
import { ViewsRevenueChartComponent } from './components/dashboard/views-revenue-chart/views-revenue-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LatestVideoComponent,
    PublishedVideosComponent,
    LatestCommentsComponent,
    AudienceChartComponent,
    SubscribersWatchtimeChartComponent,
    ViewsRevenueChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
