import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Image} from '../interfaces/image';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-image-item',
  imports: [
  ],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>();
}
