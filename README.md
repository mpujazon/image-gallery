# Sprint 4 - Image Gallery

## Description

Angular 21 web app with Tailwind CSS v4 that showcases an interactive, responsive image gallery. It features dynamic image management with grid layout, featured image display, individual and bulk deletion, and drag-and-drop reordering capabilities. Built with modern Angular patterns including standalone components and signals for state management.

![Project Demo](/public/demo.gif "Project Demo")

## Project Structure

```
image-gallery/
├── index.html
├── package.json
├── angular.json
├── public/
└── src/
    ├── main.ts              # App entry point
    ├── styles.css           # Global styles and responsive layout
    ├── index.html           # HTML template
    └── app/
        ├── app.ts           # Root component
        ├── app.html         # Root template
        ├── app.css          # Root styles
        ├── app.routes.ts    # Application routes
        ├── app.config.ts    # Application configuration
        ├── interfaces/
        │   └── image.ts     # Image data type
        ├── components/
        │   └── image-item/
        │       ├── image-item.ts
        │       └── image-item.html
        ├── layouts/
        │    └─ page-header/
        │       ├── page-header.ts
        │       └── page-header.html
        └── pages/
            └── gallery/
                ├── gallery.ts       # Gallery page logic and state
                ├── gallery.html     # Gallery template
```

## Technologies

- Angular 21
- TypeScript 5.9
- Tailwind CSS 4
- PrimeNG and PrimeUX UI Components
- pnpm (Package manager)

## Requirements

- Node.js 18+
- pnpm 10.28.0+

## Installation

```bash
git clone <repo-url>
cd image-gallery
pnpm install
```

## Run

- Dev server: `pnpm start` or `ng serve`
- Production build: `pnpm build` or `ng build`
- Run tests: `pnpm test` or `ng test`

## Features

- **Responsive Grid Layout**: Displays images in a responsive grid that adapts to different screen sizes
- **Featured Image**: First image is highlighted and displayed prominently
- **Individual Deletion**: Delete single images with confirmation
- **State Management with Signals**: Uses Angular signals for reactive state management
- **Component Communication**: Parent-child communication using inputs and outputs
- **Accessible Design**: Built with accessibility and semantic HTML in mind
- **Modern Control Flow**: Uses Angular's new built-in control flow syntax (`@if`, `@for`)

## Learnings

- Building standalone components in Angular 21
- Using signals for state management without traditional RxJS observables
- Parent-child component communication with `@Input()` and `@Output()`
- Modern Angular control flow with `@if`, `@for`, and `@switch`
- Styling with Tailwind CSS v4 and PrimeNG theming
- Responsive design patterns
- Accessibility best practices in modern web applications
