import { Document } from 'mongoose';

export interface IdeaInterface extends Document {
  readonly idea: string;
  readonly createdate: Date;
  readonly description: string;
}
