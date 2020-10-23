import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppareilsPage } from './appareils/appareils';
import { SingleAppareilPage } from './single-appareil/single-appareil.page';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilsPage },
  { path: 'single-appareil', component: SingleAppareilPage }
];

@NgModule({
  declarations: [
  	AppComponent,
  	AppareilsPage,
  	SingleAppareilPage			
  ],
  entryComponents: [
  	AppareilsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  RouterModule.forRoot(appRoutes)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
