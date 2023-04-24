import { Model } from "objection";
import Question from "./Question";
import Topic from "./Topic";

export default class QuestionTopic extends Model {
  static get tableName() {
    return "question_topics";
  }

  static get idColumn() {
    return ["question_id", "topic_id"];
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["question_id", "topic_id"],

      properties: {
        question_id: { type: "integer" },
        topic_id: { type: "integer" },
        created_at: {
          type: "string",
          format: "date-time",
        },
      },
    };
  }

  static get relationMappings() {
    return {
      question: {
        relation: Model.BelongsToOneRelation,
        modelClass: Question,
        join: {
          from: "question_topics.question_id",
          to: "questions.id",
        },
      },
      topic: {
        relation: Model.BelongsToOneRelation,
        modelClass: Topic,
        join: {
          from: "question_topics.question_id",
          to: "topics.id",
        },
      },
    };
  }
}
