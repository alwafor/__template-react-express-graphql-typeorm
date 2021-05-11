//////RESOLVER EXAMPLE
import { Word } from "../../entity/Word";
import {
   Arg,
   Query,
   Resolver
} from "type-graphql";

@Resolver()
export class WordResolver {
   @Query(() => Word, { nullable: true })
   async getWord(@Arg("word") word: string): Promise<Word | undefined> {
      return undefined;
   }
}
