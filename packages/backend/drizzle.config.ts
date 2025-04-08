import { defineConfig } from "drizzle-kit";
if (!process.env.DB_URL) {
  throw new Error("DB_URL not found");
}
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DB_URL,
  },
});
