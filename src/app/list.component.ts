import { Component } from "@angular/core";
import {FormControl, FormGroup, Validators } from "@angular/forms";
import { FIFOService } from "./service/FIFO.service";
import { LIFOService } from "./service/LIFO.service";
import { Node } from "./service/node";

@Component({
  selector: 'list-comp',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [Node]
})

export class ListComponent{
  curFIFOString: String = "";
  curLIFOString: String = "";
  fifo: FIFOService;
  lifo: LIFOService;
  currentFIFO: Node | null;
  currentLIFO: Node | null;
  noStart: boolean = true;
  form: FormGroup;
  constructor(){
    this.form = new FormGroup({
      "inputString": new FormControl("null", [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])
    });
    this.lifo = new LIFOService(null);
    this.fifo = new FIFOService(null);
    this.currentFIFO = new Node("empty", null);
    this.currentLIFO = new Node("empty", null);
    this.form.get('inputString')?.valueChanges.subscribe(val => {
      this.noStart = !(this.form.controls['inputString'].value === "*");
      this.currentFIFO = this.fifo.head;
      this.currentLIFO = this.lifo.head;
    })
  }

  addElem(){
    this.fifo.addElem(this.form.controls['inputString'].value);
    this.lifo.addElem(this.form.controls['inputString'].value);
  }

  getFIFOElems(): String[]{
    let values: String[] = [];
    let cur: Node | null = this.fifo.head;
    while(cur != null){
      if(cur.value === "null") break;
      values.push(cur.value);
      cur = cur.next;
    }
    return values;
  }

  getLIFOElems(): String[]{
    let values: String[] = [];
    let cur: Node | null = this.lifo.head;
    while(cur?.next != null){
      values.push(cur.value);
      cur = cur.next;
    }
    return values;
  }

  inputValidator(control: FormControl): {[s:string]:boolean}|null{
    if(control.value==="*"){
      this.noStart = false;
      return {"inputString": true};
    }
    return null;
  }

  move(){
    this.moveLIFOStep();
    this.moveFIFOStep();
  }

  moveFIFOStep(){
    let node: Node | null = this.currentFIFO;
    if(node != null){
      if(node.value === "null") return;
      this.curFIFOString = node.value;
      this.currentFIFO = this.currentFIFO!.next;
      this.fifo.deleteElem();
    }
  }

  moveLIFOStep(){
    let node: Node | null = this.currentLIFO;
    if(node?.next != null){
      if(node.value === "null") return;
      this.curLIFOString = node.value;
      this.currentLIFO = this.currentLIFO!.next;
      this.lifo.deleteElem();
    }
  }
}


