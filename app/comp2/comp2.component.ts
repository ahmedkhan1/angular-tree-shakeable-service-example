import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';
import { TreeshakableService } from '../treeshakeable.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(
    public shakeable: TreeshakableService,
  ) { }

  ngOnInit() {
    console.log('ng on init comp2');
    this.shakeable.connectionCall();
  }

}