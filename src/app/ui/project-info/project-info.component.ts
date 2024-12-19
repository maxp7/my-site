import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent {
  @Input() project: any = {};  // Receive the project data
  @Output() close = new EventEmitter<void>();  // Emit close event to parent


  onBackdropClick(event: MouseEvent) {
    const modalElement = document.querySelector('.info-container');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.closeModal();  
    }
  }

  closeModal() {
    this.close.emit();  
  }
}
