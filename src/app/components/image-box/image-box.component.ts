import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: 'image-box.component.html',
  styles: [
  ]
})
export class ImageBoxComponent {
  @Input() imageData: any | undefined;
}