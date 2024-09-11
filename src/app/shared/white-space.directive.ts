import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const element = this.el.nativeElement as HTMLTextAreaElement;
    if (element) {
      element.value = element.value.trim();
    }
  }

}
