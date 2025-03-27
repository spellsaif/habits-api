import { sql } from "drizzle-orm";
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const habits = sqliteTable("habits", {
  id: int()
    .primaryKey({ autoIncrement: true }),

  name: text()
    .notNull(),

  done: integer({ mode: "boolean" })
    .notNull()
    .default(false),

  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),

  updatedAt: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const selectHabitsSchema = createSelectSchema(habits);
export const insertHabitsSchema = createInsertSchema(habits)
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });
