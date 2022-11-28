import { Component, OnInit } from '@angular/core';
import { songs } from 'src/assets/text/songs';

@Component({
  selector: 'app-text-to-follow',
  templateUrl: './text-to-follow.component.html',
  styleUrls: ['./text-to-follow.component.css']
})
export class TextToFollowComponent implements OnInit {

  texts: any = songs;
  selectedSong: any = {}
  content: string = '';

  constructor() { }

  ngOnInit(): void {
    this.selectedSong = this.getSong(this.texts, true);
    this.content = this.selectedSong.content;
    this.selectedSong = this.selectedSong.content.split(' ').filter((e:string) => e != '' && e != '\n');
    console.log('Cancion seleccionada', this.selectedSong);
  }

  getSong(texts: any[],isRandom:boolean){
    if(isRandom){
      const randomNumber = Math.floor(Math.random() * texts.length);
      return texts[randomNumber]
    }
  }

  
}
