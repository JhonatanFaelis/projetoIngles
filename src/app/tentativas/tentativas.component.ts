import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {


  @Input() public tentativas: Number | undefined 

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
  constructor() { }

ngOnChanges(changes: SimpleChanges): void {
  this.tentativas
}

  ngOnInit(): void {
  }

}
