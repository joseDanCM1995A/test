import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  golds: number[] = [10, 1000, 2, 1];
  goldsSort: number[] = [];
  result: number[] = [];
  enableButton: boolean;
  min: number;
  max: number;
  resultA: number[] = [];
  resultB: number[] = [];
  sumatory: number;
  addA: any;
  addB: any;
  end: boolean = false;
  limit: number;
  constructor() { }

  ngOnInit() {
  }

  turnA(){
    console.log("Turno de A");
    this.enableButton = true;
  
     if(this.goldsSort.length == 1){
      console.log("longitud de A - 1")
      this.resultA.push(this.goldsSort[0])
      console.log("resultA", this.resultA);
      this.goldsSort.pop();
      console.log('currentArray', this.goldsSort);
      this.addA = this.ArrayAdd(this.resultA);
      this.addB = this.ArrayAdd(this.resultB);
      this.result.push(this.addA);
      this.result.push(this.addB);
      this.end = true;
      setTimeout(() => {
        alert("fin del test")
        alert("resultA" + "[" + this.addA  + "," + this.addB + "]");
        window.location.href = "/test"
      }, 7000);
      return;
    }
    if(this.goldsSort.length == 2){
      console.log("entró", this.goldsSort.length)
      this.max = this.goldsSort[this.goldsSort.length - 1]
      console.log("maxCond", this.max)
      this.resultA.push(this.max)
      console.log("resulltA", this.resultA)
      this.goldsSort.pop();
      console.log('currentArray', this.goldsSort);
      return;
    } else {
      this.goldsSort = this.golds.sort((a, b) => a - b);
      console.log("ArraySort", this.goldsSort)
      this.min = this.goldsSort[0];
      this.max = this.goldsSort[this.goldsSort.length - 2]
      this.resultA.push(this.min);
      console.log("resulltA", this.resultA)
      this.goldsSort.shift();  
      console.log('currentArray', this.goldsSort);   
    } 
  }

  turnB(){
    console.log("Turno de B");
    this.enableButton = false;
    if(this.goldsSort.length == 2){
      console.log("entró", this.goldsSort.length)
      this.max = this.goldsSort[this.goldsSort.length - 1]
      console.log("maxCond", this.max)
      this.resultB.push(this.max)
      console.log("resulltB", this.resultB)
      this.goldsSort.pop();
      console.log('currentArray', this.goldsSort);   
      return;
    } 
    if(this.goldsSort.length == 1){
      console.log("entró", this.goldsSort.length)
      this.min = this.goldsSort[0]
      this.resultB.push(this.min);
      console.log("resulltB", this.resultB)
      this.goldsSort.pop();
      console.log('currentArray', this.goldsSort);
      this.addA = this.ArrayAdd(this.resultA);
      this.addB = this.ArrayAdd(this.resultB);
      this.result.push(this.addA);
      this.result.push(this.addB);
      this.end = true;
      setTimeout(() => {
        alert("fin del test")
        alert("resultA" + "[" + this.addA  + "," + this.addB + "]");
        window.location.href = "/test"
      }, 7000);
      
      return;
    }
    this.min = this.goldsSort[0];
    this.max = this.goldsSort[this.goldsSort.length - 1]
    this.resultB.push(this.min);
    console.log("resulltB", this.resultB)
    this.goldsSort.shift();  
    console.log('currentArray', this.goldsSort);
    
  }

  ArrayAdd(array: number[]){
     this.sumatory = array.reduce((acumulador, numero) => acumulador + numero)
     console.log("Array por método", this.sumatory);
     return this.sumatory;
  } 

}
