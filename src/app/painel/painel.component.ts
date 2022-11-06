import { Component, OnInit,  } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao:string = 'Traduza a Frase:'
  public resposta: String = ''

  public rodada:number = 0
  public rodadaFrase!: Frase;

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {

    this.atualizaRodada()
    
  }

  ngOnInit(): void {
  }

 public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
   
  }

  public verificarResposta(): void{
    //verificar pergunta da rodada
    if (this.rodadaFrase.fraseBr == this.resposta){
      alert('A tradução esta correta')
      //se estiver certo add um numero no indice de rodada
      this.rodada++

      //colocar que a cada rodada ele receba ele mesmo mais 25

      this.progresso = this.progresso + (100 / this.frases.length)
      
      this.atualizaRodada()
      
      
    } else {
      //diminuir a variavel tentativas
      alert('A traducao esta errada')
      this.tentativas--

      this.atualizaRodada()

      if(this.tentativas === -1){
        alert('Você perdeu todas as tentativas')
      }
    }
   
  }


  public atualizaRodada (): void {

    //ao adicionar esta pedindo para colocar na tela a frase com o indice adicionado
    this.rodadaFrase = this.frases[this.rodada]

    //ao mandar a resposta e acertar voltar a valor em branco
    this.resposta=''
  }

}
