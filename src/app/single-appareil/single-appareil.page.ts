import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  name: String;

  constructor(public navParams: NavParams, private route: ActivatedRoute) { }

  ngOnInit() {
     const appareilName = this.route.snapshot.params['appareilName'];

  	this.name = 'appareilName';
  }

}
