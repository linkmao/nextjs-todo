---
layout: ../../components/Layout.astro
title: Next-js
description: Desarrollo de una aplicación web usando Nextjs, el cual consiste un una pequeña to do list, la información de cada tarea se almacena en una pequeña base de datos instalada en local, usando sqilite. En el mismo proyecto se construye un api y se desarrollan los métodos CRUD.
date: Diciembre 2023
---

# Nextjs-todo

## Descripción
Desarrollo de una aplicación web usando Nextjs, el cual consiste un una pequeña to do list, la información de cada tarea se almacena en una pequeña base de datos instalada en local, usando sqilite. En el mismo proyecto se construye un api y se desarrollan los métodos CRUD.


## Tecnologías usadas
- Nextjs: Generador de proyecto y en generar framework de js que trbaja de fondo con react
- React
- Tailwind
- Prisma: ORM que permite de manera sencilla comunicar la base de datos con la aplicación


**Video base :**[Video](https://www.youtube.com/watch?v=_SPoSMmN3ZU)

**Repositorio:**  [Repo](https://github.com/linkmao/nextjs-todo)

**Deploy** [Sin despliegue](*)

## Como correr
```
$ npm run dev
```

## Descripcion detallada
Nextjs se constituye quizas en m framework base para desarrollo de mis proyectos personales, pues permite en un mismo proyecto tener en caso de ser necesario el frontend y el backend, tal como se realiza en este proyecto

El proyecto consiste en una lista de tareas sencillas las cuales desde el frontend se pueden ver, crear, editar o eliminar. Las tareas estan en una base de datos que proporciona sqilite, lo que segun veo es una version reducida de sql.
En la misma aplicación se desarrolla un api, la cual permite operar mediante CRUD la base de datos, la api se accede a traves de la siguientes rutas
`localhost:3000/api/task`, para verlas en pantalla
`localhost:3000/api/task/[id]` para editar, y borrar

Es importante anotar que las rutas no estan protegidas por lotanto el proyecto en monosusuario ya que no se ha desarrollado un login

Se usa Prisma el cual es un ORM que permite con una sintaxis sencilla acceder a la base de datos, por lo tanto se sugiere estudiar a mayor profundidad su uso


## Conceptos usados
-   Uso de prisma para acceder a la base de datos en sqlite
 funciones para la manipulación de Implementaciones y mejoras futuras
## Implementaciones y mejoras futuras
- Un Login para que el proyecto sea multiusuario
- Estilizarlo para su uso en dispositivos móviles



## Mis detalles técnicos

### Instalacion de Prisma
Prisma es un ORM que permite craar con código js las funciones para interactuar con la base de datos, la verdad lo encuentro muy sencillo y útil, lo que veo a la fecha es que en el ejmeplo solo se trabaja con sqlite, pero seguramente Prisma debe permitir ser un ORM para otras bases de datos como por ejemplo MongoDB.
La instalación de Prisma requiere los siguientes pasos



```
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

```
Es aconsejable instalar extencion prisma en vscode para ayuda contextual, la que instalé se llama `Prisma` de la empresa prisma.io

Los modelos de tabla se escriben en la ruta prisma/schema.prisma (La carpeta prisma va fuera de la carpeta src, va al mismo nivel de ella)

Despues de crear los modelos se debe ejecutar prisma para que migre el modelo escrito al lenguaje de bd de finitivo

```
npx prisma migrate dev --name init
```
Para ver la base de datos en desarrollo se tienen dos alternativas.
1. Usar la extensión en VS code `SQLite viewer`
2. Usando la interfaz web que proporciona Prisma a traves del puerto 5555
```
npx prisma studio
```

Para conectar la base de datos con las rutas se debe crear una carpeta dentro de src (ojo debe ser fuera de app) en este caso la carpeta la llamammos libs y dentro de libs un archivo llamado prima.js, allí se llama una libreria que ya se instaló al intanciar prismas y se escribe el código que allí se muestra

Otro elemento importante en nextjs es que por ejemplo en la página fornten dondese se listan las tareas de este proyecto puedo solicitar los datos a mostrar (en este caso lita de tarea de dos maneras)

1. Haciendolo directamente desde la api que se ha creado,haciendo uso de fetch
2. Consultando directamiente la base de datos usando prisma

en el proyecto se puede ver ambas implementaciones

***
## Maolink Software
Diciembre 2023 



























