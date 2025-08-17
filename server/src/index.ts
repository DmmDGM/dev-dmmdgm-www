// Imports
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";

// Defines app
const app = new Elysia()
    .use(staticPlugin({
        assets: "../client/dist/",
        prefix: "/"
    }))
    .listen(3000);

// Prints console
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
