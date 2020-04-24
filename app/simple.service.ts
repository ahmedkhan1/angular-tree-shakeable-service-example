import { Injectable } from '@angular/core';

@Injectable()
export class SimpleService {

  constructor() { } 

  public methodCall(): void {
    console.log('Hi there! this is a method call from Simple Service');
  }

}