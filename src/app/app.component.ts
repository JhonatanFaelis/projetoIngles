import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public jogoEmAndamento: boolean = true
  public Tipoencerramento: string | undefined

  public encerrarJogo(tipo:string):void {
    this.jogoEmAndamento = false
    this.Tipoencerramento = tipo
  }

  public reiniciarJogo():void {
    this.jogoEmAndamento = true
    this.Tipoencerramento = undefined
  }
}
