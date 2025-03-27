import createRouter from "@/lib/create-router";

import * as handlers from "./habits.handlers";
import * as routes from "./habits.routes";

const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create);

export default router;
