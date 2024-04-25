import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title: string = '';
  @Input() img_1: string = '';
  @Input() img_2: string = '';
  @Input() price: number = 0;
  isHover: boolean = false;
  
  onMouseOver() {
    this.isHover = true;
  }

  onMouseOut() {
    this.isHover = false;
  }
}