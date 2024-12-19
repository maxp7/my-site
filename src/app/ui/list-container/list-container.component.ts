import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component'
import { DividerComponent } from '../divider/divider.component';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListComponent, DividerComponent, ProjectInfoComponent ,CommonModule],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.scss'
})export class ListContainerComponent {
  contactsItems = [
    { text: 'get email', link: 'mailto:maksym.pidluzhnyi@gmail.com' },
    { text: 'get cv', link: '/cv.pdf' },
    { text: 'github', link: 'https://github.com/maxp7' },
    { text: 'instagram', link: 'https://instagram.com/podlughniy' }
  ];

  projectsItems = [
    { text: 'vishnevska.com', link: 'https://vishnevska.com', documentation: '1', github: '1' },
    { text: 'indes', link: '/indes.pdf', documentation: '1', github: '1' },
    { text: 'fragmente', link: 'https://fragmente.example.com', documentation: '1', github: '1' },
    { text: 'tactile music interfaces', link: 'https://ars.electronica.art/who-owns-the-truth/en/tactile-music-interfaces/', documentation: '1', github: '1' }
  ];

  showInfo: boolean = false;
  projectData: any = {};

  // Method to handle the click event for both projects and contacts
  openProjectInfo(item: any) {
    if (item.documentation || item.github) {
      // For projects, open the modal
      this.projectData = item;
      this.showInfo = true;
    } else {
      // For contact items, navigate to the link
      window.open(item.link, '_blank'); // This will open the link in a new tab
    }
  }

  // Method to close the modal
  closeInfo() {
    this.showInfo = false;
    this.projectData = {};  // Reset the project data when the modal is closed
  }
}
