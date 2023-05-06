# COMPANY Directory API BACKEND AND MODEL

## 1. Getting started

a simple CRUD application 

### 1.1 View Application and Documentation

- Application live url - https://companydirectory-service.onrender.com.

### 1.2 Application Requirements

Before starting, make sure you have at least those components on your workstation:

- The LTS version  of [NodeJs](https://nodejs.org/en/download). 
- [Mongodb](https://www.mongodb.com/) Document  database.

### 1.3 Project configuration

Start by cloning this project on your workstation.

```sh
mkdir directory
cd directory
git clone  https://github.com/Udo-Eng/DirectoryAPP.git  .
```

The next thing will be to install all the dependencies of the project.

```sh

npm install 
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.example .env
vi .env
```

### 1.4 Running the app

You are now ready to launch the Node application using the command below.

```sh
# Run the
$ npm run dev

```

## 2. Technologies/Tools

- NodeJs
- express
- mongoDB
