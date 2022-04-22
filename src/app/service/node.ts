import { Injectable } from "@angular/core";

@Injectable()
export class Node {
  value: String;
  next: Node | null;
  //символ латиницы
  constructor(value: String, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}
