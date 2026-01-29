import { Component } from '@angular/core';
import {Image} from '../../interfaces/image';
import {ImageItem} from '../../components/image-item/image-item';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [
    ImageItem,
    NgClass
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  images: Image[] = [
    {
      id: "1",
      src: "https://picsum.photos/1024/768?random=1",
      alt: "Random image 1"
    },
    {
      id: "2",
      src: "https://picsum.photos/1024/768?random=2",
      alt: "Random image 2"
    },
    {
      id: "3",
      src: "https://picsum.photos/1024/768?random=3",
      alt: "Random image 3"
    },
    {
      id: "4",
      src: "https://picsum.photos/1024/768?random=4",
      alt: "Random image 4"
    },
    {
      id: "5",
      src: "https://picsum.photos/1024/768?random=5",
      alt: "Random image 5"
    },
    {
      id: "6",
      src: "https://picsum.photos/1024/768?random=6",
      alt: "Random image 6"
    },
    {
      id: "7",
      src: "https://picsum.photos/1024/768?random=7",
      alt: "Random image 7"
    },
    {
      id: "8",
      src: "https://picsum.photos/1024/768?random=8",
      alt: "Random image 8"
    },
    {
      id: "9",
      src: "https://picsum.photos/1024/768?random=9",
      alt: "Random image 9"
    },
    {
      id: "10",
      src: "https://picsum.photos/1024/768?random=10",
      alt: "Random image 10"
    },
    {
      id: "11",
      src: "https://picsum.photos/1024/768?random=11",
      alt: "Random image 11"
    },
    {
      id: "12",
      src: "https://picsum.photos/1024/768?random=12",
      alt: "Random image 12"
    },
    {
      id: "13",
      src: "https://picsum.photos/1024/768?random=13",
      alt: "Random image 13"
    },
    {
      id: "14",
      src: "https://picsum.photos/1024/768?random=14",
      alt: "Random image 14"
    },
    {
      id: "15",
      src: "https://picsum.photos/1024/768?random=15",
      alt: "Random image 15"
    },
    {
      id: "16",
      src: "https://picsum.photos/1024/768?random=16",
      alt: "Random image 16"
    },
    {
      id: "17",
      src: "https://picsum.photos/1024/768?random=17",
      alt: "Random image 17"
    },
    {
      id: "18",
      src: "https://picsum.photos/1024/768?random=18",
      alt: "Random image 18"
    },
    {
      id: "19",
      src: "https://picsum.photos/1024/768?random=19",
      alt: "Random image 19"
    },
    {
      id: "20",
      src: "https://picsum.photos/1024/768?random=20",
      alt: "Random image 20"
    },
    {
      id: "21",
      src: "https://picsum.photos/1024/768?random=21",
      alt: "Random image 21"
    },
    {
      id: "22",
      src: "https://picsum.photos/1024/768?random=22",
      alt: "Random image 22"
    },
    {
      id: "23",
      src: "https://picsum.photos/1024/768?random=23",
      alt: "Random image 23"
    },
    {
      id: "24",
      src: "https://picsum.photos/1024/768?random=24",
      alt: "Random image 24"
    },
    {
      id: "25",
      src: "https://picsum.photos/1024/768?random=25",
      alt: "Random image 25"
    },
    {
      id: "26",
      src: "https://picsum.photos/1024/768?random=26",
      alt: "Random image 26"
    },
    {
      id: "27",
      src: "https://picsum.photos/1024/768?random=27",
      alt: "Random image 27"
    },
    {
      id: "28",
      src: "https://picsum.photos/1024/768?random=28",
      alt: "Random image 28"
    },
    {
      id: "29",
      src: "https://picsum.photos/1024/768?random=29",
      alt: "Random image 29"
    },
    {
      id: "30",
      src: "https://picsum.photos/1024/768?random=30",
      alt: "Random image 30"
    }
  ];
}
