import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() color: string = 'var(--bg-color)';
  currentTime: string = ''; 
  private timerId!: number; 

  ngOnInit() {
    this.updateTime(); 
    this.timerId = window.setInterval(() => this.updateTime(), 1000); 
  }

  ngOnDestroy() {
    clearInterval(this.timerId); 
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); 
  }
}
