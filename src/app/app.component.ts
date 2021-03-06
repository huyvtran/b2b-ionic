import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {CategoryPage} from '../pages/category/category';
import {ShowRequestPage} from '../pages/show-request/show-request';
import {PostRequestPage} from '../pages/post-request/post-request';
import {ProfileInfoPage} from '../pages/profile-info/profile-info';
import {SignupPage} from '../pages/signup/signup';
import {OtpPage} from '../pages/otp/otp';
import {SplashscreenPage} from '../pages/splashscreen/splashscreen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage:any = SplashscreenPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Post Request', component: CategoryPage },
      { title: 'Show Request', component: ShowRequestPage },
      {title:'Dashboard', component:DashboardPage},
      {title: 'Home', component:HomePage},
    ];
  }

  ionic
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

