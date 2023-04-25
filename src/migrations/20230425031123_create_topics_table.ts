import { Knex } from "knex";

/**
 * Creates the `topics` table in the db.
 * @param knex
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("topics", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.text("topic").notNullable();
    table.text("description").notNullable();
    table.boolean("is_verified").notNullable();
    table.timestamps(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("topics");
}
