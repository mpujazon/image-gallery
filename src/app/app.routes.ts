import { Routes } from '@angular/router';
import {Gallery} from './pages/gallery/gallery';

export const routes: Routes = [
  {
    path: 'gallery',
    component: Gallery
  },
  {
    path: "**",
    redirectTo: "gallery"
  }
];
