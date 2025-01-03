# To-Do List App

Uma aplicação simples de lista de tarefas com backend em Node.js e frontend estático, configurada para rodar em contêineres Docker com suporte a persistência de dados.

## **Pré-requisitos**

Certifique-se de ter os seguintes itens instalados na sua máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## **Como executar o projeto**

### **1. Clonar o repositório**

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/SEU_USUARIO/todo-list.git
cd todo-list
```

### **2. Construir os contêineres**

Para construir as imagens Docker, execute o seguinte comando:

```bash
docker-compose build
```

### **3. Subir os contêineres**

Para iniciar os contêineres:

```bash
docker-compose up -d
```

Este comando inicia o projeto em segundo plano. Os serviços estarão disponíveis.

### **4. Acessar a aplicação**

Abra o navegador e acesse:

```
http://localhost:3000
```

### **5. Persistência de dados**

Os dados da aplicação são armazenados em um volume Docker chamado `todo-data`. Isso garante que as tarefas não sejam perdidas, mesmo que o contêiner seja reiniciado.

## **Como parar a aplicação**

Para parar os contêineres:

```bash
docker-compose down
```

Os dados salvos permanecerão intactos no volume `todo-data`.

## **Estrutura do Projeto**

```
.
├── app/
│   ├── public/
│   │   ├── index.html       # Frontend da aplicação
│   │   ├── styles.css       # Estilos do frontend
│   │   └── script.js        # Scripts do frontend
│   ├── server.js           # Backend com Node.js
│   └── package.json        # Dependências do Node.js
├── Dockerfile               # Configuração do contêiner
├── docker-compose.yml       # Orquestração dos serviços
└── README.md                # Documentação
```

## **Comandos úteis**

### Ver logs dos contêineres:
```bash
docker-compose logs -f
```

### Reconstruir os contêineres:
```bash
docker-compose up --build
```

### Remover contêineres, redes e volumes:
```bash
docker-compose down -v
```

---

**Autor:** Camile Isidorio Araujo

