import { Model } from "objection";
import QuestionTopic from "./QuestionTopic";

export default class Question extends Model {
  static get tableName() {
    return "questions";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["type", "difficulty", "metadata", "is_verified"],

      properties: {
        id: { type: "integer" },
        type: { type: "string" },
        difficulty: { type: "string" },
        metadata: {
          type: "object",
          properties: {
            question: { type: "string" },
            answer: { type: "string" },
            reference: { type: "string" },
          },
        },
        is_verified: {
          type: "boolean",
        },
        created_at: {
          type: "string",
          format: "date-time",
        },
        updated_at: {
          type: "string",
          format: "date-time",
        },
      },
    };
  }

  static get relationMappings() {
    return {
      question_topics: {
        relation: Model.HasManyRelation,
        modelClass: QuestionTopic,
        join: {
          from: "questions.id",
          to: "question_topics.question_id",
        },
      },
    };
  }

  static async search({ topic_id }: { topic_id?: number }) {
    let query = Question.query();

    if (topic_id)
      query = query
        .alias("q")
        .joinRelated("question_topics", { alias: "qt" })
        .where("qt.topic_id", topic_id);

    return query;
  }
}
