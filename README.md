# Integration test for core-apps
[![Build Status](https://travis-ci.com/eXist-db/e2e-core.svg?branch=master)](https://travis-ci.com/eXist-db/e2e-core)

These tests use [cypress.js](https://www.cypress.io) to inspect the pages of the default apps inside a running exist instance.

## Requirements
*   node >= `8`
*   for local development a running exist instance:
    *   at port: `8080`
    *   with default admin user and pw

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
Test runs are linked to the [cypress dashboard](https://dashboard.cypress.io/#/projects/w23pgu/runs). To access the dashboard log-in with your Github credentials.

## What this is
This is to serve as a central place to develop e2e tests which will then be added to the respective repos.

The autodeployed apps are:
*   eXide
*   monex
*   Usermanager
*   Dashboard
    *   Backup Central,
    *   Collection Browser
    *   Package Manager

A test scaffold for each of these can be found inside `cypress/integration` along with some boilerplate templates in `cypress/`.



## What this isn't
Integration testing within a browser are not a good fit for performance testing of java code. For stress tests and performance tests, visit [e2e-exist](https://github.com/eXist-db/e2e-exist)

This repo will never add apps that aren't in exist-db's auto-deploy folder on a fresh install. To add similar tests to your own apps, see the scaffolding of the [yeoman generator](https://github.com/eXist-db/generator-exist)
