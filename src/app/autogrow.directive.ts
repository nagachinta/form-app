import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autogrow]',
  host : {
		'(focus)' : 'onFocus()',
		'(blur)' : 'onBlur()'
	}	
})
export class AutogrowDirective {

  constructor(private el: ElementRef, private renderer : Renderer) { }

  onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width','200px');
	}
	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement,'width','120px');
	}
}
