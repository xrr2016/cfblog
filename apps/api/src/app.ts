import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono111!");
}).get("/api/ping", (c) => {
  return c.text("pong");
});