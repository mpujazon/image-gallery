import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Image} from '../../interfaces/image';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-image-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>();
  isFirstImage = input.required<boolean>();
}
