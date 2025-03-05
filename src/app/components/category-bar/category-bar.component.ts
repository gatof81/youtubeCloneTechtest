import { Component, AfterViewInit, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent {
  categories = [
    'All', 'Music', 'Gaming', 'Movies', 'News', 'Sports', 'Live', 'Fashion', 'Tech',
    'Comedy', 'Cooking', 'Travel', 'Education', 'Podcasts', 'Cars', 'DIY', 'Fitness'
  ];

  activeCategory: WritableSignal<string> = signal('All');
  showArrow: WritableSignal<boolean> = signal(false);

  ngAfterViewInit() {
    this.checkOverflow();
    window.addEventListener('resize', this.checkOverflow.bind(this));
  }

  checkOverflow() {
    const container = document.querySelector('.categories');
    if (container) {
      const isOverflowing = container.scrollWidth > container.clientWidth;
      this.showArrow.set(isOverflowing);
    }
  }

  scrollRight() {
    const container = document.querySelector('.categories');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  setActive(category: string) {
    this.activeCategory.set(category);
  }
}
