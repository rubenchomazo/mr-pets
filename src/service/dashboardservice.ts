import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getGalleryData() {
    return [
      {
        id: '1',
        name: 'mr-pets',
        image: 'mr-pets5.png',
      },
      {
        id: '2',
        name: 'mr-pets2',
        image: 'mr-pets2.png',
      },
      {
        id: '3',
        name: 'mr-pets-family',
        image: 'polo.png',
      },
      {
        id: '4',
        name: 'chunky',
        image: 'chunky.png',
      },
      {
        id: '5',
        name: 'agility',
        image: 'agility-gold.png',
      },
    ];
  }

  getBrandData() {
    return [
      {
        id: '1',
        name: 'agility',
        image: 'agility-brand.jpg',
      },
      {
        id: '2',
        name: 'chunky',
        image: 'chunky-brand.png',
      },
      {
        id: '3',
        name: 'dog-chow',
        image: 'dog-chow-brand.png',
      },
    ];
  }

  getGalleryMini() {
    return Promise.resolve(this.getGalleryData().slice(0, 5));
  }

  getGallerySmall() {
    return Promise.resolve(this.getGalleryData().slice(0, 10));
  }

  getGallery() {
    return Promise.resolve(this.getGalleryData());
  }

  getBrand() {
    return Promise.resolve(this.getBrandData());
  }
}
