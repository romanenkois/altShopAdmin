import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

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
