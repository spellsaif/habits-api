import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";
import { habits } from "@/db/schema";

import type { CreateRoute, ListRoute } from "./habits.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const habits = await db.query.habits.findMany();
  return c.json(habits);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const habit = c.req.valid("json");
  const [inserted] = await db.insert(habits).values(habit).returning();
  return c.json(inserted);
};
