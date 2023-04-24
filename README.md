# Description

This project contains two folders with different kind of building app. There two types of React-SSR deployment without any frameworks. The main aim of learning is to understand how to build SSR, practice Webpack, Babel scripting and also exploring an alternative tool - esbuild.

This dumb-app includes two components, styles, state and js-scripts (for checking the building completely).

ps: First of all, I was wondering what SSR is
then I decided to try to write a simple app to study this issue, because reading only articles is not very interesting

### Techs

- JS, Node.js
- React
- Express
- Webpack
- Babel
- Esbuild

Dev and prod mode are both available.

### ssr-webpack-babel commands (package.json)

- `build-clean` - remove old building version;

- `dev:build-server` | `prod:build-server` - remove old building and create new one;
- `dev:start-server` | `prod:start-server` - run app.

### ssr-esbuild commands (package.json)

- `build-clean` - remove old building version;

- `dev:build-client`| `prod:build-client` - build client side;
- `dev:build-server`| `prod:build-server` - build server side;
- `dev:build`| `prod:build` - clean old version of building and rebuild all;
- `dev:start` - run server with development mode;
- `prod:start-server` - run server;
- `prod:start` - rebuild all and run.
