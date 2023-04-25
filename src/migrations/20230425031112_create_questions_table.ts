import { Knex } from "knex";

/**
 * Creates the `questions` table in the DB.
 * @param knex
 * @returns
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("questions", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.text("type").notNullable();
    table.text("difficulty").notNullable();
    table.jsonb("metadata").notNullable();
    table.boolean("is_verified").notNullable();
    table.timestamps(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("questions");
}
