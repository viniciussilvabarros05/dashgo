import { createServer, Factory, Model, Response } from 'miragejs'
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
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api' // setando o caminho para o qual a aplicação vai chamar
            this.timing = 750 // coloca um delay nas chamadas para fazer a simulação dos atrasos de requisição quando a aplicação estiver em produção 

            this.get('/users', function (schema, request) {
                const { page = 1, per_page = 10 } = request.queryParams
                const total = schema.all('user').length
                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)
                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)
                const schemaX = this.serialize(schema.all('user'))
                console.log(schemaX)
                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    { users },
                   
                )

           
            })
            this.post('/users')

            this.namespace = '' // resetando o caminho da api para não entrar em conflito com a api Next Routes da pasta api
            this.passthrough() // um next da vida
        }
    })

    return server
}