import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { ListComponent } from './ui/list/list.component';
import { ListContainerComponent } from './ui/list-container/list-container.component';
import { ProjectInfoComponent } from './ui/project-info/project-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ListComponent, ListContainerComponent, ProjectInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-site';
}
