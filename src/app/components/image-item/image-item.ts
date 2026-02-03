import {ChangeDetectionStrategy, Component, computed, input, output, signal} from '@angular/core';
import {Image} from '../../interfaces/image';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-image-item',
  imports: [
    NgOptimizedImage,
  ],
  host:{
    '[class.col-span-2]': 'isFeatured()',
    '[class.row-span-2]': 'isFeatured()'

  },
  templateUrl: './image-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>();
  priority = input.required<boolean>();
  isFeatured = input.required<boolean>();
  deleteImageId = output<string>();

  onDeleteClick(event: Event) {
    event.stopPropagation();
    this.deleteImageId.emit(this.image().id);
  }
}
