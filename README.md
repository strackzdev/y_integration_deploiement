# Individual Project - Integration and Deployment

## Description

This is a YNOV School project aiming to test, build, and deploy a project, helping students to understand how it works in a real deployment chain from development to deployment.

## Project Structure

The project is structured into two main parts: the backend (NestJS) and the frontend (Angular). Both parts are organized into separate directories:

- `back`: Contains the backend code, including NestJS configuration, TypeScript source files, and test files.
- `front`: Contains the frontend code, including Angular configuration, TypeScript source files, and test files.
- `.github`: Contains the GitHub workflows that enforce our gitflow, build, testing, and deployment process.

## Key Features

- Backend:
    - Built with NestJS, a progressive Node.js framework.
    - Uses TypeScript for type-safe development.
    - Implements a RESTful API for user management.
    - Includes unit tests and end-to-end tests using Jest.

- Frontend:
    - Built with Angular, a popular TypeScript-based framework.
    - Uses Angular CLI for project setup and development.
    - Implements a user interface for managing users.
    - Includes unit tests and end-to-end tests using Angular's testing framework.

## Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/strackzdev/y_integration_deploiement
```

### 2. Run project with docker compose:
The Docker Compose file contains the Webapp (Angular) which is exposed via a nginx webserver, nestJS API, and Postgres database.
```bash
npm run compose
```

## Version Strategy
The version will be managed manually by the developer, and auto-commit versions strategy will not increment correctly when handling major version updates. Each package.json file should be updated manually to reflect the new version number, and then the updated package.json files should be deployed to the NPM repository.

## Latest Deployment:

- Webapp: [Click Here](https://strackzdev.github.io/y_integration_deploiement/)
- Auto-Generated Documentation: [Click Here](https://strackzdev.github.io/y_integration_deploiement/docs/)