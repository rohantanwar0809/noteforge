import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

if (!process.env.DATABASE_URL) {
  throw new Error("Cannot find database url in .env file");
}

console.log("DATABASE_URL", process.env.DATABASE_URL);

const client = postgres(process.env.DATABASE_URL, {
  max: 1,
});
const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log("🟡 Migrating database...");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Database migrated");
  } catch (error) {
    console.log("error", error);

    console.log("🔴 Error migrating database");
  }
};

migrateDb();

export default db;
