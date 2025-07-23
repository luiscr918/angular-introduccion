import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
currentIndex = 0;
  images = [
    'https://4kwallpapers.com/images/walls/thumbs_3t/23027.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/9324.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/9321.jpg'
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
