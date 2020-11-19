import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private defaultColor = 'yellow';

  @Input('appHighlight')
  color: string;

  @Input()
  duration = 10;

  initialColor = '';


  constructor(private el: ElementRef) {
    console.log('Constructor:', this.color);
    // this.initialColor = this.el.nativeElement.style.backgroundColor;
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this.color);
    this.color = this.color || this.defaultColor;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event): void {
    this.highlight(this.color);
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this.highlight(this.initialColor);
  }

  highlight(color: string): void {
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }

}
