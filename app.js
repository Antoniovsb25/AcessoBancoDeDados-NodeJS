const livros = require('./database')

//Pegando o input do usuário para escolher categoria

    const readline = require('readline-sync')
    console.log('----------Seja Bem-vindo ao nosso banco de dados de livros!----------\n')
    var entradaInicial = readline.question('Deseja buscar um livro? S/N\n(Pressione F para finalizar o programa)')

    while(entradaInicial.toLocaleUpperCase() != 'F'){
        console.log(entradaInicial)
        if (entradaInicial.toLocaleUpperCase() != 'S' && entradaInicial.toLocaleUpperCase() != 'N'){
            console.log('ERRO! Por favor, digite S ou N (Pressione F para finalizar o programa)')
            
        } else {
            //Se SIM, mostra categorias disponíveis e pergunta qual categoria ela quer
            if (entradaInicial.toLocaleUpperCase() === 'S') {
                console.log('Essas são as categorias disponíveis: ')
                console.log("\nProdutividade e estilo de vida\n", "História brasileira\n",
                "Américas\n", "Tecnologia\n", "Estilo de vida\n")
                const entradaCategoria = readline.question('Qual categoria voce escolhe? (Nao ulitize acentos)\n ')
                const retorno = livros.filter((livros) => livros.categoria.toLocaleUpperCase() === entradaCategoria.toLocaleUpperCase())
                console.table(retorno)
                return
            } else {
                //Se não, mostra todos os livros em ordem crescente pela quantidade de pags
                const livrosOrdenados = livros.sort((a, b) => {
                    a.paginas - b.paginas
                })
                console.log('\nEsses são todos os livros disponíveis: \n')
                console.table(livrosOrdenados)
                return
            }
        }
        return
    }
        

       
            
    
    
