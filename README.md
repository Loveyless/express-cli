<h1 align="center">🎉Welcome to add-express🎉</h1>
<div align="center">
  <a href="https://www.npmjs.com/package/add-express" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/add-express.svg">
  </a>
  <a href="https://www.npmjs.com/package/add-express" target="_blank">
    <img alt="" src="https://img.shields.io/node/v/add-express?color=purple">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/npm/dt/add-express" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/github/languages/code-size/loveyless/add-express?color=orange" />
  </a>
</div>

## Introduce 📖
add-express is a small scaffolding for quickly building express services.

integration with express Mysql MongoDB 


[Homepage](https://github.com/loveyless/add-express)
## Use 🔨

Global installation
```
npm i add-express -g
```

In the directory you want to create
```
add-express
```
go to the ../project/config/default.json
change mysql user and password and database name
after modification
```
npm start
```
Built-in register login testislogin and "/" request
```js

baseUrl=" localhost: your port ";

// /
/
body:none

----------------------------------------------

//register POST
/user
body:{
    "username":"2",
    "password":"2"
}

----------------------------------------------

//login GET
/login
body:{
    "username":"2",
    "password":"2"
}

----------------------------------------------

//testislogin GET
/login/islogin
header:{
  "Authorization": "in login returned token"
}

```
## File 📂
```
add-express
├─ config                # Default configuration file
├─ key                   # Asymmetric encryption key
├─ node_module           # node package
├─ src
│  ├─ app                # express mysql mongodb jwt deploy
│  ├─ controller
│  ├─ middleware
│  ├─ mongodb            # mongodb schema
│  ├─ router
│  ├─ service            # mysql service
│  ├─ utils
│  ├─ main.js
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ README.md
```

## author

👤 **Loveyless**

* Nationality: Chinese
* Github: [@loveyless](https://github.com/loveyless)
