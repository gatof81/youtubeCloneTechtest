import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DUMMY_SHORTS } from '../../data/dummy-shorts';

@Component({
  selector: 'app-shorts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shorts-list.component.html',
  styleUrls: ['./shorts-list.component.scss']
})
export class ShortsListComponent {
  shorts = DUMMY_SHORTS;
}
