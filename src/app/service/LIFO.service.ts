import { Injectable } from "@angular/core";
import {Node} from "./node";

@Injectable()
export class LIFOService{
  head: Node | null;
  constructor(head: Node | null){
    this.head = new Node(head?.value || "null", head?.next);
  }

  addElem(value: string): void {
    const newNode: Node = new Node(value, this.head);
    this.head = newNode;
  }

  deleteElem(): void{
    if(this.head === null){
      return;
    }
    this.head = this.head.next;
  }

  moveStep(): void {
    let current = this.head;
  }
}
