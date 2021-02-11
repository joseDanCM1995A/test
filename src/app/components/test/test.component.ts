import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  golds: number[] = [];
  goldsSort: number[] = [];
  result: number[] = [];
  enableButton: boolean;
  min: number;
  max: number;
  minB: number;
  maxB: number;
  resultA: number[] = [];
  resultB: number[] = [];
  sumatory: number;
  addA: any;
  addB: any;
  end: boolean = false;
  limit: any;
  random: number;
  currentA: any;
  currentB: any;
  winnerA: boolean = false;
  winnerB: boolean = false;
  constructor() { }

  ngOnInit() {
    this.limit = window.prompt("Ingrese longitud del Array")
    for(let i=0; i < this.limit; i++){
      this.random = Math.floor(Math.random() * (100 - 1 + 1) + 1)
      this.golds.push(this.random);
    }
    //console.log("GOLDSnew", this.golds);
  }

  turnA(){
    //console.log("Turno de A");
    this.enableButton = true;
     if(this.goldsSort.length == 1){
      //console.log("longitud de A - 1")
      this.currentA = this.goldsSort[0];
      this.resultA.push(this.goldsSort[0])
      //console.log("resultA", this.resultA);
      this.goldsSort.pop();
      //console.log('currentArray', this.goldsSort);
      this.addA = this.ArrayAdd(this.resultA);
      this.addB = this.ArrayAdd(this.resultB);
      if(this.addA > this.addB){
        this.winnerA = true;
        this.winnerB = false;
      }
      this.result.push(this.addA);
      this.result.push(this.addB);
      this.end = true;
      setTimeout(() => {
        alert("fin del test")
        window.location.href = "/test"
      }, 7000);
      return;
    }
    if(this.goldsSort.length == 2){
      //console.log("entró", this.goldsSort.length)
      this.min = this.goldsSort[0];
      this.max = this.goldsSort[this.goldsSort.length - 1]
      //console.log("maxCond", this.max)
      this.currentA = this.max;
      this.resultA.push(this.max)
      //console.log("resulltA", this.resultA)
      this.goldsSort.pop();
      //console.log('currentArray', this.goldsSort);
      return;
    } else {
      this.goldsSort = this.golds.sort((a, b) => a - b);
      //console.log("ArraySort", this.goldsSort)
      this.min = this.goldsSort[0];
      this.max = this.goldsSort[this.goldsSort.length - 2]
      this.currentA = this.min;
      this.resultA.push(this.min);
      //console.log("resulltA", this.resultA)
      this.goldsSort.shift();  
      //console.log('currentArray', this.goldsSort);   
    } 
  }

  turnB(){
    //console.log("Turno de B");
    this.enableButton = false;
    if(this.goldsSort.length == 2){
      //console.log("entró", this.goldsSort.length)
      this.minB = this.goldsSort[0]
      this.max = this.goldsSort[this.goldsSort.length - 1]
      this.maxB = this.goldsSort[this.goldsSort.length - 1]
      this.currentB = this.max;
      this.resultB.push(this.max)
      //console.log("resulltB", this.resultB)
      this.goldsSort.pop();
      //console.log('currentArray', this.goldsSort);   
      return;
    } 
    if(this.goldsSort.length == 1){
      //console.log("entró", this.goldsSort.length)
      this.min = this.goldsSort[0]
      this.minB = this.goldsSort[0];
      this.maxB = this.goldsSort[this.goldsSort.length - 1];
      this.currentB = this.min;
      this.resultB.push(this.min);
      //console.log("resulltB", this.resultB)
      this.goldsSort.pop();
      //console.log('currentArray', this.goldsSort);
      this.addA = this.ArrayAdd(this.resultA);
      this.addB = this.ArrayAdd(this.resultB);
      if(this.addB > this.addA){
        this.winnerA = false;
        this.winnerB = true;
      }
      this.result.push(this.addA);
      this.result.push(this.addB);
      this.end = true;
      setTimeout(() => {
        alert("fin del test; se reiniciará en 10s")
        window.location.href = "/test"
      }, 10000);
      
      return;
    }
    this.min = this.goldsSort[0];
    this.minB = this.goldsSort[0];
    this.max = this.goldsSort[this.goldsSort.length - 1]
    this.maxB = this.goldsSort[this.goldsSort.length - 1]
    this.currentB = this.min;
    this.resultB.push(this.min);
    //console.log("resulltB", this.resultB)
    this.goldsSort.shift();  
    //console.log('currentArray', this.goldsSort); 
  }

  ArrayAdd(array: number[]){
     this.sumatory = array.reduce((acumulador, numero) => acumulador + numero)
     return this.sumatory;
  } 
}
