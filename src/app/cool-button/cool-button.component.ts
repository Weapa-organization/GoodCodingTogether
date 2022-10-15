import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-button',
  templateUrl: './cool-button.component.html',
  styleUrls: ['./cool-button.component.css']
})
export class CoolButtonComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {   
  }

  reproducirSonido(pista:string){
    let sonido = new Audio();
    sonido.src = "../assets/audio/"+pista;
    sonido.play()
  }

}
