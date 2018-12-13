import { Input,Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'overlay',
  templateUrl: 'overlay.html'
})
export class OverlayComponent implements AfterViewInit {

  private _force:boolean = false;

  @Input()
  set force(val) {
    this._force = val == '' ? true : !!val;
  }

   text: string;

  constructor( private elementRef : ElementRef, private renderer : Renderer2, private _storage: Storage, public navCtrl: NavController) {
    console.log('Hello OverlayComponent Component');
    this.text = 'Hello World';
  }

  get storage_key() {
    return `shown-overlay-${this.navCtrl.getActive().id}`;
  }

  ngAfterViewInit() {
      // Check local storage to see if we already displayed this...
      this._storage.get(this.storage_key).then( (val) => {
          if( !val || this._force )
              this.renderer.addClass( this.elementRef.nativeElement, 'shown' )
      });
  }

  hide_overlay() {
      this._storage.set(this.storage_key, 1);
      this.renderer.removeClass( this.elementRef.nativeElement, 'shown' );
  }

} 
