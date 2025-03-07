import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed: WritableSignal<boolean> = signal(false);
  activeSection = 'Home';

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  ngAfterViewInit() {
    window.addEventListener('resize', this.handleResize); // Listen for window resize
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize); // Cleanup event listener
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    this.isCollapsed.set(isMobile); // Collapse sidebar if mobile, expand if not
  };

}
