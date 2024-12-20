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
    { text: 'get email', link: 'mailto:maksym.pidluzhnyi@gmail.com', title: 'Email Maksym' },
    { text: 'get cv', link: '/cv.pdf', title: 'Download CV' },
    { text: 'github', link: 'https://github.com/maxp7', title: 'GitHub Profile' },
    { text: 'instagram', link: 'https://instagram.com/podlughniy', title: 'Instagram Profile' }
  ];
  

  projectsItems = [
    {
      text: 'vishnevska.com',
      link: 'https://vishnevska.com',
      title: '~/vishnevska.com',
      documentation: 'https://vishnevska.com',
      github: 'https://github.com/maxp7/Anastasiia-portfolio',
      info: '> This website is all about the work of Vishnevska, an artist and filmmaker who`s been looking at where technology, art and sociology meet. <br><br> > It\'s got short movies and sensory AI explorations, and shows off some pretty innovative projects that mix human experience and digital realms. So, why not dive into a world where creativity and technology collide?'
    },
        { text: 'indes', link: '',title: '~/indes', documentation: '/indes.pdf', github: 'https://github.com/maxp7/indes', info: `
      > Post-human "<i>don't get angry</i>" is a post-humanist reinterpretation of the popular classic <b>Mensch ärgere dich nicht</b>, 
      which deliberately breaks all the rules of (gaming) art. <br><br>
      > Constant change is at the centre of this interactive and destructive game: it reflects the unsteady, dynamic conditions of our world 
      and forces players to adapt flexibly to changing game rules and objectives. <br><br>
      > At the same time, it promotes a deeper understanding of relational and situational ways of thinking and acting and thus offers an insight 
      into possible post-human working methods.
    `
  },
    { text: 'fragmente', link: '',title: '~/fragmente', documentation: '/fragmente.pdf', github: 'https://github.com/maxp7/Fragmente', info: '> <b>"Fragmente"</b> is a narrative installation in which visitors are invited to take a seat in a small living room.</br></br>> On a side table, there is a photo album which takes visitors on a journey into the past. </br> </br>> As soon as the first page of the album is turned, the album tells a fragmentary story about memories, identity and family from multiple perspectives with the help of photographs and audio contributions.' },
    { text: 'tactile music interfaces',link: '', title: '~/tactileMusicInterfaces', documentation: 'https://ars.electronica.art/who-owns-the-truth/en/tactile-music-interfaces/', github: 'https://github.com/maxp7/Tactile-Music-Interfaces', info: '> The interactive application was developed with the aim of providing inclusive access for blind and visually impaired people and was created in cooperation with the <i>Museum of Musical Instruments</i> (MiM) in Berlin. <br><br> > The three musical interfaces are each inspired by historical musical instruments in their functionality and appearance. These are the <b>hurdy-gurdy</b>, the <b>clavichord</b>, and the <b>shelf</b>. <br><br> > By touching or pressing these tactile interfaces, the samples of the respective exhibits produce sound and encourage visitors to make music' }
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
