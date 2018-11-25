# Integration test for core-apps

These tests use [cypress.js](https://www.cypress.io) to inspect the pages of the default apps inside a running exist instance.

## Requirements
*   `node: ^8.0.0`
*   a running exist instance for local development

The exist instance should be reachable at standard port 8080 and have an empty admin pw.

To install cypress from inside this folder call:
```bash
npm i
```

## Running cypress
To run the tests locally, navigate inside this folder in your CLI:
use either:
```bash
npx cypress open
```
or
```bash
npm test
```
The tests are also executed on Travis.
Test runs are linked to the [cypress dashboard]. To access the dashboard log-in with your Github credentials.

## What this is
This is to serve as a central place to develop e2e tests which will then be added to the respective repos.

The autodeployed apps are:
*   Collections
*   eXide
*   monex
*   package manager
*   Usermanager
*   Dashboard
    *   Backup Central,
    *   Collection Browser
    *   Package Manager

A test scaffold for each of these can be found inside `cypress/integration` along with some boilerplate templates.



## What this isn't
Integration testing within a browser are not a good fir for performance testing of java code. For stress tests and performance tests, visit [e2e-exist](https://github.com/eXist-db/e2e-exist)
