import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
@Component({
  selector: 'app-images-page',
  templateUrl: 'images-page.component.html',
  styles: [
  ]
})
export class ImagesPageComponent {
  imagesData: any[] = [];

  constructor(private BridgeService: BridgeService) { }

  ngOnInit() {
    this.BridgeService.getImagesData().subscribe((data:any) => {
      
      this.imagesData = data;
      //console.log(this.productsData)
    });
  };
}
