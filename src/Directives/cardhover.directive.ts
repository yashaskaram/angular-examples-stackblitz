import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ccCardHover]',
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary')
  private ishovering: boolean = false;

  constructor(private el: ElementRef, private rendrer: Renderer2) {
    //this.rendrer.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }
  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.rendrer.setStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.rendrer.setStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}
