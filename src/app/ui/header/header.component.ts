import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
