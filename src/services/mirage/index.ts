import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: { //Passando os dados que serão colocados no banco de dados ficticio
            user: Model.extend<Partial<User>>({ // O partial serve  para dizer que nem todas as informações da tipagem podem estar presentes
            })
        },

        factories: {
            user: Factory.extend({
                name(i) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server) {
            server.createList('user',10)
        },

        routes() {
            this.namespace = 'api' // setando o caminho para o qual a aplicação vai chamar
            this.timing = 750 // coloca um delay nas chamadas para fazer a simulação dos atrasos de requisição quando a aplicação estiver em produção 

            this.get('/users')
            this.post('/users')

            this.namespace = '' // resetando o caminho da api para não entrar em conflito com a api Next Routes da pasta api
            this.passthrough() // um next da vida
        }
    })

    return server
}