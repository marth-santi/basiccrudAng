import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.scss' ],
})
export class ItemComponent implements OnInit {
  @Input() itemContent: string;
  @Input() itemIndex;
  @Input() content: string;
  @Input() isEditing = false;

  @Output() contentChange = new EventEmitter<string>();
  @Output() ItemDeleted = new EventEmitter<string>();
  @Output() ItemSaved = new EventEmitter<any>();

  @ViewChild('addContent') addEle: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.content = this.itemContent;
  }

  EditItem() {
    this.isEditing = true;
    setTimeout(() => {
      this.addEle.nativeElement.focus();
    }, 0);
  }

  DeleteItem() {
    this.ItemDeleted.emit(this.itemIndex);
  }

  SaveItem() {
    this.ItemSaved.emit({ key: this.itemIndex, content: this.content });
    this.isEditing = false;
  }
}
