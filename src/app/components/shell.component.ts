import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <div class="flex flex-row bg-gray-200">
      <app-navbar></app-navbar>
      <div
        class="flex justify-between content-center bg-gray-100 h-16 w-full border-solid border-b-2 border-gray-300 p-3"
      >
        <div class="left-0">test</div>
        <div class="flex right-0">
          <div class="">test</div>
          <div class="">test</div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
