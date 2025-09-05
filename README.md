# Ovanakeruniversitet

This project represents a fictive university website for showing and saving university courses. The project is made with TypeScript with the Angular framework. 
A live version of the webiste is available at: https://ovanakeruniversitet.netlify.app/ 

The list of courses comes from a JSON file with data of university courses from Mittuniverstitet course list as of 2023. The data is used in the project with HttpClient.

The table of courses, pagination and filtering is made with Angular Material components.

Option to save and remove courses and build your own course schedule is possible. Saved courses are stored in localStorage and you can add or remove courses to your personal course list.

This is a Single Page Application which with the help of routing, components and services shows components on the website without webpage reload.



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
