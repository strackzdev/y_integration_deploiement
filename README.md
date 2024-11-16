# Individual Project - Integration and Deployment

This is a YNOV School project aiming to test, build, and deploy a project, helping students to understand how it works in a real deployment chain from development to deployment.

# References
- [Important Links](#important-links)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Project Evaluation](#project-evaluation)
- [Version Strategy](#version-strategy)
- [Deployment](#deployment)

## Important Links:

- Webapp (Github Pages): [Click Here](https://strackzdev.github.io/y_integration_deploiement/)
- Auto-Generated Documentation (Webapp): [Click Here](https://strackzdev.github.io/y_integration_deploiement/docs/)
- Codecov: [Click Here](https://app.codecov.io/github/strackzdev/y_integration_deploiement)
- NPM Package: [Click Here](https://www.npmjs.com/package/integration-deploiement-personal-front)
- Github Repository: [Click Here](https://github.com/strackzdev/y_integration_deploiement)

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

## Project Evaluation

- Achieved 100% code coverage through Unit Tests to validate the mechanics of specific features.
- Completed 100% Integration Test coverage to ensure end-to-end functionality, including template changes and interactions. 
- Automated the generation of functional documentation, a structured README, and coverage reports deployed to Codecov.
- Implemented a workflow encompassing testing, global deployment, and GitHub Pages integration.

**Bonus:**

- Set up a webhook triggered on GitHub pushes to notify my personal VPS, which automatically refreshes the Docker Compose deployment.

## Version Strategy
**The version will be managed manually by the developer.**

In this project example, I decided to update the NPM repository only when the developer makes changes to the `package.json` version (not all file).

**Disclaimer:** During our classes, some students used the Auto-commit versions strategy, which often struggles with major version updates. This approach can also lead to issues such as developers not wanting to increment the version with every code push or conflicts arising from multiple merge requests with differing versions. I opted for this approach because it eliminates many headaches and potential problems.

## Deployment

Currently, I have deployed the backend on my personal VPS to ensure you can test the project properly. Once you finalize your choice of cloud provider with Ynov, I will adapt the deployment accordingly.
