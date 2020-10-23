import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AppareilsPage } from '../appareils/appareils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onGotoAppareils(){
//  	this.navCtrl.goForward(AppareilsPage);
  	 return this.router.navigateByUrl('appareils');
  }
}
