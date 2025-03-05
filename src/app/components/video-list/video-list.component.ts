import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';
import { DUMMY_VIDEOS } from '../../data/dummy-videos';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, VideoCardComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  videos = DUMMY_VIDEOS;

}
