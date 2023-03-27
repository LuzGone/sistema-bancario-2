class PessoaFisica extends Pessoa{
    private _cpf:string;
    constructor(nome:string,idade:number,dataNascimento:Date,cpf:string){
        nome += " - Física"
        super(nome,idade,dataNascimento);
        this._cpf = cpf;
    }

    set cpf(newCpf:string){
        this._cpf = newCpf;
    }

    get cpf():string{
        return this._cpf;
    }

}