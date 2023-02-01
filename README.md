# API Rest Jobs
 Api Rest simples para simular cadastro de empregos em uma empresa, cadastro de candidatos, onde os candidatos podem ser candidatar as vagas de empregos.

##Endpoints
## Candidates
### GET /candidates
Esse endpoint é responsável por retornar a listagem de todos os candidatos no banco de dados.
#### Parâmetros 
Nenhum
#### Respostas
###### Status 200!
Retorna um json com todos os candidatos cadastrados.

Exemplo de resposta:
```
[
    {
        "id": 1,
        "name": "Arthur",
        "email": "arthur@email.com",
        "bio": "I'm a full-stack javascript developer with experience on MERN stack.",
        "phone": "1111-1111",
        "openToWork": true,
        "createdAt": "2023-01-17T01:36:44.789Z",
        "updatedAt": "2023-01-17T01:36:44.789Z"
    },
    {
        "id": 2,
        "name": "Beatrice",
        "email": "beatrice@email.com",
        "bio": "Front-end developer | React | Next.js | Typescript",
        "phone": "2222-2222",
        "openToWork": false,
        "createdAt": "2023-01-17T01:36:44.789Z",
        "updatedAt": "2023-01-17T01:36:44.789Z"
    },
    {
        "id": 3,
        "name": "Cecil",
        "email": "contato@onebitcode.com",
        "bio": "Somos uma escola de tecnologia focada em formar programadores",
        "phone": "3333-3333",
        "openToWork": true,
        "createdAt": "2023-01-17T01:36:44.789Z",
        "updatedAt": "2023-01-18T02:14:43.937Z"
    }
]
```
###### Erro 404
Caso aconteça este erro, significa que aconteceu algum erro para listar os candidatos. 

### POST /candidates
Esse endpoint é responsável por criar novos candidatos no banco de dados.
#### Parâmetros 
Nenhum
#### Respostas
###### Status 200!
Retorna um json com todos os candidatos cadastrados.
```
{
    "id": 6,
    "name": "Mary",
    "bio": "I'm a software developer",
    "email": "mary@email.com",
    "phone": "555-5555",
    "openToWork": true,
    "updatedAt": "2023-02-01T01:04:38.960Z",
    "createdAt": "2023-02-01T01:04:38.960Z"
}
```

###### Erro 400
Caso aconteça este erro, significa que aconteceu algum erro para cadastrar o candidato.

```
{
    "message": "notNull Violation: candidates.name cannot be null"
}
```
