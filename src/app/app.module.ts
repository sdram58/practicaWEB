import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { AboutPage } from '../pages/about/about';
import { DetailPage } from '../pages/detail/detail';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { ProductListPage } from '../pages/product-list/product-list';
import { AuthService } from '../providers/auth-service/auth-service';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { OrderServiceProvider } from '../providers/order-service/order-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MainPage,
    DetailPage,
    ProductListPage,
    AboutPage,
    OrderDetailPage,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
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
    OrderDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ProductServiceProvider,
    OrderServiceProvider
  ]
})
export class AppModule {}

