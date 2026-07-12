// Imports
import { Hono } from "hono";
import { Entry } from "./entry";

// Defines api
const api = new Hono();
api
    .get("/ping", (context) => {
        console.log(Entry.fetch());
        return context.text("pong");
    });

export default new Hono().route("/api", api);;

