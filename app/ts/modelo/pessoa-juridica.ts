class PessoaJuridica extends Pessoa{
    private _cnpj:string;
    constructor(nome:string,idade:number,dataNascimento:Date,cpf:string){
        nome += " - Jurídica"
        super(nome,idade,dataNascimento);
        this._cnpj = cpf;
    }

    set cnpj(newCnpj:string){
        this._cnpj = newCnpj;
    }

    get cnpj():string{
        return this._cnpj;
    }

}