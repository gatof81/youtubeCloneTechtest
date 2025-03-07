import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';
import { ShortsListComponent } from '../../components/shorts-list/shorts-list.component';
import { DUMMY_VIDEOS } from '../../data/dummy-videos';


@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, VideoCardComponent, ShortsListComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  videos = DUMMY_VIDEOS;
  allVideos = DUMMY_VIDEOS;
  visibleVideos: WritableSignal<any[]> = signal([]);
  overflowVideos: WritableSignal<any[]> = signal([]);

  ngAfterViewInit() {
    this.calculateVideoRows();
    window.addEventListener('resize', this.calculateVideoRows.bind(this));
  }

  calculateVideoRows() {
    const container = document.querySelector('.first-row');
    if (container) {
      const containerWidth = container.clientWidth;
      const cardWidth = 365;
      const videosPerRow = Math.floor(containerWidth / cardWidth);

      this.visibleVideos.set(this.allVideos.slice(0, videosPerRow));
      this.overflowVideos.set(this.allVideos.slice(videosPerRow).reverse());
    }
  }
}
