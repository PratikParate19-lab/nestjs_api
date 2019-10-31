import * as mongoose from 'mongoose';

export const IdeaSchema = new mongoose.Schema({
  idea: String,
  createdate: Date,
  description: String,
});
