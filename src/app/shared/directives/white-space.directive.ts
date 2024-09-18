import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {

  constructor(private element: ElementRef) { }

  @HostListener('blur') onBlur() {
    const element = this.element.nativeElement as HTMLTextAreaElement;
    if (element) {
      element.value = element.value.trim();
    }
  }

}
