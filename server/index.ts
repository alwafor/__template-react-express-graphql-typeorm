import { WordResolver } from './src/modules/Resolvers/word';
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import {buildSchema} from 'type-graphql';
import * as cors from 'cors';

const main = async () => {
   await createConnection();
   const schema = await buildSchema({
      resolvers: [WordResolver] //EXAMPLE RESOLVER.
   });

   const apolloServer = new ApolloServer({
      schema
   });
   const app = express();

   app.use(cors({
      credentials: true
   }));

   apolloServer.applyMiddleware({app});
   app.listen(4000,() => {console.log("Server started: http://localhost:4000/graphql")})
}
main();