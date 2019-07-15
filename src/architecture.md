### Project architecture

This directory contains the root files of the application.
The application is structured in a simple way.

#### Directories

The `controllers` directory contains all the routes the server exposes. These should contain the business logic and be as minimal as possible. The core functionality should be handled in the services.

The `services` directory contains files with methods the controllers call. These should not have business logic.

#### Files

`server.ts` is the file that gets executed by node to start the program. This contains the starting of express and registers all the routes with their controllers.

`config.ts` contains a flat object with (runtime) configuration for the services.
