import { Component, signal } from '@angular/core';
import {Gallery} from './pages/gallery/gallery';
import {RouterOutlet} from '@angular/router';
import {PageHeader} from './layouts/page-header/page-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('image-gallery');
}
