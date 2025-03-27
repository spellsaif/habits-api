import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { insertHabitsSchema, selectHabitsSchema } from "@/db/schema";

export const list = createRoute({
  tags: ["Habits"],
  path: "/habits",
  method: "get",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(selectHabitsSchema),
      "The list of Habits",
    ),
  },
});

export const create = createRoute({
  tags: ["Habits"],
  path: "/habits",
  method: "post",
  request: {
    body: jsonContentRequired(insertHabitsSchema, "Habit to create"),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(
      selectHabitsSchema,
      "The created habit",
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
