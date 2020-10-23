import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'page-appareils',
	templateUrl: 'appareils.html',
})
export class AppareilsPage {

  constructor(private router: Router) {}

  onLoadAppareil(name: String){
  	 console.log("on load appareil");

//  	this.navCtrl.goForward(AppareilsPage);
  	 return this.router.navigateByUrl('single-appareil/'+name);
  }


}