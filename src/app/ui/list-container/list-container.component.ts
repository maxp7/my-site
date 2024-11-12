import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component'

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.scss'
})
export class ListContainerComponent {
    contactsItems = ['~get email', '~get cv', '~get telegram', '~get instagram'];
    projectsItems = ['~vishnevska.com', '~indes', '~fragmente', '~tangible music interfaces'];
}
