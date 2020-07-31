import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="flex flex-col bg-blue-900 w-20 h-screen">
      <div class="h-24">
        <a
          href="#"
          class="flex flex-col items-center content-center px-3 py-8 cursor-pointer text-sm text-blue-100 antialiased tracking-wider hover:text-white hover:bg-blue-800"
        >
          <mat-icon class="transform scale-150">home</mat-icon>
        </a>
      </div>
      <div class="flex-1">
        <ng-container *ngFor="let item of items">
          <a
            href="{{ item.link }}"
            class="flex flex-col items-center content-center px-3 py-4 cursor-pointer text-sm text-blue-100 antialiased tracking-wider hover:text-white hover:bg-blue-800"
          >
            <mat-icon class="transform scale-110">{{ item.logo }}</mat-icon>
            <div>{{ item.title }}</div>
          </a>
        </ng-container>
      </div>
      <div class="flex-none">
        <a
          href="#"
          class="flex flex-col items-center content-center px-3 py-5 cursor-pointer text-sm text-blue-100 antialiased tracking-wider hover:text-white hover:bg-blue-800"
        >
          <mat-icon class="">home</mat-icon>
          <div>home</div>
        </a>
      </div>
    </div>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  items = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { logo: 'home', title: 'title', link: '#' },
      { logo: 'build', title: 'title', link: '#' },
      { logo: 'eco', title: 'title', link: '#' },
      { logo: 'face', title: 'title', link: '#' },
      { logo: 'today', title: 'title', link: '#' },
    ];
  }
}
