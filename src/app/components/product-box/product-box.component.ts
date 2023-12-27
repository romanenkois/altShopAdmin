import { Component, Input } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {
  constructor(private BridgeService: BridgeService) { }

  @Input() product: any | undefined;

  ngOnInit() {
    this.BridgeService.getImage(this.product.image).subscribe((data:any) => {
      this.product.image = data;
    });
  }
}
