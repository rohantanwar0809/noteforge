import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("Cannot find database url in .env file");
}

console.log("DATABASE_URL", process.env.DATABASE_URL);

export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
} satisfies Config;
