import { WhiteSpaceDirective } from './white-space.directive';
import { ElementRef } from '@angular/core';

describe('WhiteSpaceDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = { nativeElement: document.createElement('input') } as ElementRef;
    const directive = new WhiteSpaceDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
