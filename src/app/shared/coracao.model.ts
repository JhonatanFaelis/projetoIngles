export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCocaraoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}

    public exibeCoracao(): string {
        if(this.cheio){
            return this.urlCocaraoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}