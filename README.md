# Running the Vue 2 and Nuxt 3 Projects with JSON-Server

This guide covers the steps to get both Vue 2 and Nuxt 3 projects up and running on your local machine. Both projects utilize `json-server` to simulate a backend API using a `db.json` file.

### Start JSON-Server

Before starting applications, start the `json-server` in the root folder to simulate the API:

```bash
yarn install
```

```bash
yarn start:db
```

`json-server` will run on `http://localhost:3001`. It will watch the `db.json` file in the project root for changes.

Keep `json-server` running in a terminal.

## Vue 2 Project Setup

### Install Dependencies

Navigate to the root directory of the Vue 2 project and run:

```bash
cd vue2-app
```

```bash
yarn install
```

### Serve Application for Development

To serve the Vue 2 app with hot reload at `http://localhost:8080`, run:

```bash
yarn serve
```

## Nuxt 3 Project Setup

### Install Dependencies

Navigate to the root directory of the Nuxt 3 project and run:

```bash
cd nuxt3-app
```

```bash
yarn install
```

### Development Server

To start the Nuxt 3 development server, run:

```bash
yarn dev
```

This will build your Nuxt 3 application and start a preview server on `http://localhost:3000`.
