import { InputType, Field, Int } from 'type-graphql';
@InputType()
export class IdeaInput {
  @Field()
  readonly idea: string;
  @Field()
  readonly createdate: Date;
  @Field()
  readonly description: string;
}
