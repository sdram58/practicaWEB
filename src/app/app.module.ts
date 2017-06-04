import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { AboutPage } from '../pages/about/about';
import { DetailPage } from '../pages/detail/detail';
import { ProductListPage } from '../pages/product-list/product-list';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProductServiceProvider } from '../providers/product-service/product-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MainPage,
    DetailPage,
    ProductListPage,
    AboutPage,      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MainPage,
    DetailPage,
    ProductListPage,
    AboutPage,  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ProductServiceProvider
  ]
})
export class AppModule {}
