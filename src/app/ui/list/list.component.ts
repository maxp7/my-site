import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() items: { text: string; link?: string; title?: string; documentation?: string; github?: string; info?: string }[] = [];


  @Output() linkClicked = new EventEmitter<any>();  // Emit the clicked item data

  // Method to handle link clicks and pass item data to the parent
  handleLinkClick(item: any) {
    this.linkClicked.emit(item);  // Emit the clicked item to the parent
  }
}
