import { Component, ViewChild } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'my-basic-crud';
  ItemList = [];
  isAdding = false;

  constructor() {
    this.ItemList.push('Father content');
    this.ItemList.push('Father content 2');
  }

  deleteItem(index: number) {
    this.ItemList.splice(index, 1);
  }

  saveItem(content: any) {
    this.ItemList[content.key] = content.content;
    this.isAdding = false;
  }

  addItem() {
    this.ItemList.push('');
    this.isAdding = true;
  }
}
