## Project Architecture

### Tools

We will be using Node with Typescript for this project. To expose endpoints as an HTTP server Express will be used.

For storage we have the option to use either a full database, online database like Firebase or a flat file database like SQlite. This has yet to be decided.

Users will have to be authenticated via the Twitch API to be able to vote on runs.

### File structure

All the work is done in the `src` folder. This directory contains the root files of the application. The application is structured in relatively a simple way.

#### Directories

The `controllers` directory contains all the routes/endpoints the server exposes. These should contain the business logic and be as minimal as possible. The core functionality should be handled in the services.

The `services` directory contains files with methods the controllers call. These should not have business logic.

#### Files

`server.ts` is the file that gets executed by node to start the program. This contains the starting of express and registers all the routes/endpoints with their controllers.

`config.ts` contains a flat object with (runtime) configuration for the services.