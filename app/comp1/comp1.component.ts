import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(
    public simpleService: SimpleService,
  ) { }

  ngOnInit() {
    console.log('ng on init comp1');
    this.simpleService.methodCall();
  }

}