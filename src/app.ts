import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "@/middlewares/pino-logger";

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindings>();

app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.var.logger.info("log");
  throw new Error("error");
});

app.notFound(notFound);
app.onError(onError);

export default app;
