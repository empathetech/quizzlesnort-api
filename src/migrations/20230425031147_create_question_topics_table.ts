import { Knex } from "knex";

/**
 * Creates the `question_topics` table in the DB.
 * @param knex
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    "question_topics",
    (table: Knex.TableBuilder) => {
      table.integer("question_id").unsigned().notNullable();
      table.integer("topic_id").unsigned().notNullable();
      table.timestamps(true);

      table
        .foreign("question_id")
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE");
      table
        .foreign("topic_id")
        .references("id")
        .inTable("topics")
        .onDelete("CASCADE");

      table.primary(["question_id", "topic_id"]);
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("question_topics");
}
