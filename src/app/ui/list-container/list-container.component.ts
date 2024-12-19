import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component'
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListComponent, DividerComponent],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.scss'
})
export class ListContainerComponent {
    contactsItems = ['get email', 'get cv', 'github', 'instagram'];
    projectsItems = ['vishnevska.com', 'indes', 'fragmente', 'tactile music interfaces'];
}
