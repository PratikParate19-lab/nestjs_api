import { ObjectType, Field, ID } from 'type-graphql';
@ObjectType()
export class IdeaType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly idea: string;
  @Field()
  readonly createdate: Date;
  @Field()
  readonly description: string;
}
