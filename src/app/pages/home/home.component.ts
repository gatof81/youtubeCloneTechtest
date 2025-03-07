import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from '../../components/video-list/video-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
