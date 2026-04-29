
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
This project uses `dotenv`. Create a `.env` file in the project root with your Cosmos DB credentials. Example variables used by the project:

```
COSMOS_DB_ENDPOINT=https://your-account.documents.azure.com:443/
COSMOS_DB_KEY=your-primary-key
COSMOS_DB_DATABASE=your-database-name
COSMOS_DB_CONTAINER=your-container-name
```

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

