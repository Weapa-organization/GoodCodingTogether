import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sonido:any
  reproductorActivo:boolean

  constructor() { 
    this.reproductorActivo = false
  }

  ngOnInit(): void {
    this.sonido = new Audio()
    this.sonido.src = "../assets/audio/nuclearParty.mp3"
  }

  play(){
    this.reproductorActivo = true
    this.sonido.play()
  }

  pause(){
    this.reproductorActivo = false
    this.sonido.pause()
  }



}
