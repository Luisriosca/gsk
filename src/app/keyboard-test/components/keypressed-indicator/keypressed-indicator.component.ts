import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { WindowService } from '../../../services/window/window.service'
@Component({
  selector: 'app-keypressed-indicator',
  templateUrl: './keypressed-indicator.component.html',
  styleUrls: ['./keypressed-indicator.component.css']
})
export class KeypressedIndicatorComponent implements OnInit, OnDestroy, AfterViewInit {
  keyPressed: string = 'Escribe';
  window: any;
  constructor(private winmodule: WindowService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    
  }

  ngAfterViewInit(): void {
    this.window = this.getWindow();
    const keyDown = fromEvent(this.window, 'keydown');
    const observadorKeyboard =  {
      next: (event:any) => {
          this.keyPressed = event.key;
          //console.log(event.key);
      },
      complete: () => {},
      error: () => {}
    }
    keyDown.subscribe(observadorKeyboard);
  }
  
  getWindow(){
    return this.winmodule.getWindow();
  }
}
