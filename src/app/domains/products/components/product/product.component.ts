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
  like_svg_color: string = '#1C274C';
  isHover: boolean = false;
  liked: boolean = false;
  starsArray: number[] = [];

  onMouseOver() {
    this.isHover = true;
  }

  onMouseOut() {
    this.isHover = false;
  }

  toggleLike() {
    this.liked = !this.liked;
    this.like_svg_color = this.liked ? 'white' : '#1C274C';
  }  

  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit('Hiciste click en ' + this.title);
  }

  ngOnInit(): void {
    this.starsArray = Array.from({ length: this.stars }, (_, i) => i + 1);
  }
}