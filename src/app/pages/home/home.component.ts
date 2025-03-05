import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from '../../components/video-list/video-list.component';
import { ShortsListComponent } from '../../components/shorts-list/shorts-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideoListComponent, ShortsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
