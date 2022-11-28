import { Component, OnDestroy, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-keypressed-indicator',
  templateUrl: './keypressed-indicator.component.html',
  styleUrls: ['./keypressed-indicator.component.css']
})
export class KeypressedIndicatorComponent implements OnInit, OnDestroy {
  keyPressed: string = 'Escribe';
  constructor() { }

  ngOnInit(): void {
    const keyDown = fromEvent(document, 'keydown');
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

  ngOnDestroy(){
    
  }
}
