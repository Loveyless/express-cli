<h1 align="center">πWelcome to add-expressπ</h1>
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

## Introduce π
add-express is a small scaffolding for quickly building express services.

integration with express Mysql MongoDB 


[Homepage github](https://github.com/loveyless/add-express)
[Homepage npm](https://www.npmjs.com/package/add-express)
## Use π¨

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
You can also import postman.json Changing the baseURL

## File π
```
add-express
ββ config                # Default configuration file
ββ key                   # Asymmetric encryption key
ββ node_module           # node package
ββ src
β  ββ app                # express mysql mongodb jwt deploy
β  ββ controller
β  ββ middleware
β  ββ mongodb            # mongodb schema
β  ββ router
β  ββ service            # mysql service
β  ββ utils
β  ββ main.js
ββ .gitignore
ββ package.json
ββ package-lock.json
ββ postman.json
ββ README.md
```

## author

π€ **Loveyless**

* Nationality: Chinese
* Github: [@loveyless](https://github.com/loveyless)
