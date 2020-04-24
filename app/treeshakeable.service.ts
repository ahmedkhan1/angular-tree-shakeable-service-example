import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeshakableService {

  constructor() { }

  connectionCall(){
    console.log("Hi there! this is a method from Tree Shakeable Service!!!");
  }

}