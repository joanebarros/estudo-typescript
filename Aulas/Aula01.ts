// Tipagem no TypeScript

// Tipagem implicita

let username = 'Shaolin_matador_de_porco'
username = 'flavioDoPeneu'

// Tipagem explicita

let pi: number = 3.1415
let logado: boolean = true

// Union types

let rg : number | string = 201912293202
rg = '201912293102'

let generico : any = []
    generico = {
        a : '',
        b : '8',
        c : 'treu', 
    }
    generico = 'Eu sou generico'
    generico = 6.89

    const listaDeNomes: string[] = ['João Pedro, Cersar, Victor, Claudia, Vitoria, Larissa']
    listaDeNomes.push('Roberta')

    const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //notas.push('iajoil')

    const valores: Array<string | number> = ['lsijfls, 77, 098w094u2, 092380293840, 928094']
    const arr: Array<boolean> = [ true, false, false, false, true, true, false]
    const lista: Array<any> = [1, true, {}, [], 'lsjdnflsd']