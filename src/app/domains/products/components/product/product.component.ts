import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() stars: number = 5;
  isHover: boolean = false;
  starsArray: number[] = [];
  
  onMouseOver() {
    this.isHover = true;
  }

  onMouseOut() {
    this.isHover = false;
  }

  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit('Hiciste click en ' + this.title);
  }

  ngOnInit(): void {
    this.starsArray = Array.from({ length: this.stars }, (_, i) => i + 1);
  }
}