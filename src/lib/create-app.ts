import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { pinoLogger } from "@/middlewares/pino-logger";

import type { AppBindings } from "./types";

import createRouter from "./create-router";

export default function createApp() {
  const app = createRouter();

  app.use(serveEmojiFavicon("👾"));

  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
