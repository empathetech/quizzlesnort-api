import { Model } from "objection";

export default class Topic extends Model {
  static get tableName() {
    return "topics";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["topic", "description"],

      properties: {
        id: { type: "integer" },
        topic: { type: "string" },
        description: { type: "string" },
        created_at: {
          type: "string",
          format: "date-time",
        },
      },
    };
  }

  static get relationMappings() {
    return {};
  }
}
