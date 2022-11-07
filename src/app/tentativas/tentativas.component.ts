import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {


  @Input() public tentativas: Number | any  

  public coracoes: Coracao[] | any = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
  constructor() { }

ngOnChanges(changes: SimpleChanges): void {
  //this.tentativas
  //this.coracoes.length
  if(this.tentativas !== this.coracoes.length){
    let indice = this.coracoes.length - this.tentativas

    this.coracoes[indice - 1] = false
  }
}

  ngOnInit(): void {
  }

}
