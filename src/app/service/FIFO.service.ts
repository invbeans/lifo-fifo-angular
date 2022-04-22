import { Injectable } from "@angular/core";
import { Node } from "./node";

@Injectable()
export class FIFOService {
  first: boolean = true;
  head: Node | null;
  end: Node | null;
  constructor(head: Node | null) {
    this.head = new Node(head?.value || "null", head?.next);
    this.end = this.head;
  }

  addElem(value: string): void {
    const newNode: Node = new Node(value, null);
    if(this.first){
      this.head!.value = value;
      this.first = false;
    }
    else{
      this.end!.next = newNode;
      this.end = this.end!.next;
    }
  }

  deleteElem(): void {
    if(this.head === null){
      return;
    }
    this.head = this.head.next;
  }
}
