# Users Filter List

This project is an Angular application that displays a list of users with functionalities to filter the list by name, status, and/or sign-up date. Additionally, you can click on a specific user to show full details about that user in the right panel.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Development](#development)
- [Customization](#customization)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/users-filter.git
   cd users-filter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

To start the application, run:

```bash
npm start
```

This will serve the application at http://localhost:4200/. You can open this URL in your browser to view and interact with the user list.

## Features

- Filter Users:
  - Filter the users by name.
  - Filter the users by their status (active/inactive).
  - Filter the users by their sign-up date.
- User Details:
  - Click on a user to view full details on the right panel.

## Project Structure

The project structure is as follows:

```
users-filter/
├── src/
│ ├── app/
│ │ │── angular-material/
│ │ ├── components/
│ │ │ ├── filter/
│ │ │ │ │── filter.component.html
│ │ │ │ │── filter.component.scss
│ │ │ │ │── filter.component.spec.ts
│ │ │ │ │── filter.component.ts
│ │ │ ├── user-details/
│ │ │ │ ├── user-details.component.html
│ │ │ │ ├── user-details.component.scss
│ │ │ │ ├── user-details.component.spec.ts
│ │ │ │ ├── user-details.component.ts
│ │ │ ├── user-list/
│ │ │ │ ├── user-list.component.html
│ │ │ │ ├── user-list.component.scss
│ │ │ │ ├── user-list.component.spec.ts
│ │ │ │ ├── user-list.component.ts
│ │ ├── data/
│ │ │ ├── users-list.ts
│ │ ├── interfaces/
│ │ │ ├── user/
│ │ │ │ ├── address.interface.ts
│ │ │ │ ├── status.interface.ts
│ │ │ │ ├── user.interface.ts
│ │ │ ├── filter-options.interface.ts
│ │ ├── pipes/
│ │ │ ├── address.pipe.ts
│ │ │ ├── dash-if-empty.pipe.ts
│ │ │ ├── phone.pipe.ts
│ │ │ ├── pipes.module.ts
│ │ │ ├── status.pipe.ts
│ │ ├── utils/
│ │ │ ├── filter-users-list.ts
│ │ ├── app-routing.module.ts
│ │ ├── app.component.html
│ │ ├── app.component.scss
│ │ ├── app.component.spec.ts
│ │ ├── app.component.ts
│ │ ├── app.module.ts
│ ├── assets/
│ ├── styles/
│ │ │── utils/
│ │ │ ├── _text-align-center.scss
│ ├── favicon.ico
│ ├── index.html
│ ├── main.ts
│ ├── styles.scss
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
```

## Dependencies

### Core Dependencies

- @angular/animations: ^17.3.0
- @angular/cdk: ^17.3.10
- @angular/common: ^17.3.0
- @angular/compiler: ^17.3.0
- @angular/core: ^17.3.0
- @angular/forms: ^17.3.0
- @angular/material: ^17.3.10
- @angular/platform-browser: ^17.3.0
- @angular/platform-browser-dynamic: ^17.3.0
- @angular/router: ^17.3.0
- date-fns: ^3.6.0
- rxjs: ~7.8.0
- tslib: ^2.3.0
- zone.js: ~0.14.3

### Development Dependencies

- @angular-devkit/build-angular: ^17.3.6
- @angular/cli: ^17.3.6
- @angular/compiler-cli: ^17.3.0
- @types/jasmine: ~5.1.0
- jasmine-core: ~5.1.0
- karma: ~6.4.0
- karma-chrome-launcher: ~3.2.0
- karma-coverage: ~2.2.0
- karma-jasmine: ~5.1.0
- karma-jasmine-html-reporter: ~2.1.0
- typescript: ~5.4.2

## Development

### Running the application

To run the application locally:

```
npm start
```

### Running tests

To execute the tests:

```
npm test
```

### Building the project

To build the project for production:

```
npm run build
```

### Watching for changes

To continuously build the project in development mode:

```
npm run watch
```

## Customization

You can customize the user list in two ways:

1. **Modifying `users-list.ts` directly:**:

   - Open the `src/app/data/users-list.ts` file.
   - Edit the `UsersList` array to include yor own user data

2. **Using an HTTP request:**

   - Open the `src/app/app.component.ts` file.
   - In the `ngOnInit()` method, you can add your HTTP request to fetch user data.

---

&nbsp;

Feel free to contribute to this project by opening issues or submitting pull requests. If you have any questions or feedback, don't hesitate to reach out.

Enjoy using the Users Filter List!
