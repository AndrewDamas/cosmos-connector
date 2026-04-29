
cosmos-connector
================

A tiny Node.js starter that connects to Azure Cosmos DB using the `@azure/cosmos` SDK.

This README explains how to install dependencies, provide configuration (environment variables), and run the project.

Prerequisites
-------------
- Node.js (recommended LTS, e.g. 16+)
- npm (bundled with Node)

Install
-------
From the project root, install dependencies:

```bash
npm install
```

Configuration (environment variables)
-------------------------------------
This project uses `dotenv`. Create a `.env` or `.env.local` file in the project root with your Cosmos DB credentials. Add the following variables to your `.env.local` file (example values):

```
COSMOS_CONNECTION_STRING=AccountEndpoint=https://cosmos-test.documents.azure.com:443/;AccountKey=your_account_key_here;
DATABASE_NAME=cosmos-db
CONTAINER_NAME=container
```

Quick adaptation note:
You typically only need to update the connection string, database, and container values in `.env.local` (the variables above) and then edit the query or logic inside `index.js` to perform the specific read/write you want. The code reads environment values at startup, so restart the Node process after updating `.env.local`.

Notes:
- Do NOT commit your `.env` file. A `.gitignore` already exists that ignores `.env` files.
- You can create `.env` from an example template (not included) or copy/paste the lines above and edit.

Run
---
The project entrypoint is `index.js` (see `package.json` `main`). Run it with Node:

```bash
node index.js
```

If you prefer an npm script, you can add a `start` script to `package.json` that runs `node index.js`:

```json
"scripts": {
  "start": "node index.js"
}
```

Testing
-------
There are no automated tests included. The `test` script in `package.json` currently errors by default. You can replace it with your preferred test runner later.

Contribution
------------
Feel free to open issues or submit pull requests. Keep secrets out of the repo and document environment variables when adding features that require configuration.

License
-------
This project does not specify a license in `package.json`. Add a `LICENSE` file if you want to make licensing explicit.

