# Notable Health - Code Challenge - BackEnd

This project was created using [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/)

## Setup

**Prerequisites:**

- NodeJS 14 or Higher
- Docker

In order to setup the project follow this instructions:

1. Clone the project

```bash
$ git clone https://github.com/Alejoboga20/notablehealth-backend.git
```

2. Install Dependencies using yarn (you can use npm but the project is using yarn)

```bash
yarn install
```

3. To Run locally, a database is needed: Use the following command in the root directory of this project to create a Mongo Database.

```bash
docker-compose up -d
```

4. Run Project in development mode

```bash
yarn dev
```

5. Seed Database (you can open the following URL in your web browser). This sted will load initial data in a mongo database.

```
GET  http://localhost:3000/api/seed
```

You should get the following message ir your browser is seed was done.

```
{"ok":true,"message":"Seed DB"}
```
