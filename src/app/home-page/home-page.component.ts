import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const images = [
      './assets/skyview.png',
      './assets/snow.jpg',  
      './assets/travel Slide.png',
    ];
    
    let currentIndex = 0;
    const sliderImage = document.getElementById('slider-image') as HTMLImageElement;
    const prevButton = document.getElementById('prev-button') as HTMLButtonElement;
    const nextButton = document.getElementById('next-button') as HTMLButtonElement;
    
    function updateImage() {
      sliderImage.src = images[currentIndex];
    }
    
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      updateImage();
    });
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      updateImage();
    });
    updateImage();
  }
}
