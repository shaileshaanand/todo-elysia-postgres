import {
  pgTable,
  integer,
  text,
  boolean,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1 }),
  done: boolean().default(false).notNull(),
  title: text().notNull(),
  deadline: date(),
  deleted: boolean().default(false).notNull(),
  updatedAt: timestamp()
    .$onUpdate(() => new Date())
    .notNull(),
  createdAt: timestamp()
    .$default(() => new Date())
    .notNull(),
});
