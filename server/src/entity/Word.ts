import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, BaseEntity } from "typeorm";
import { Field, ID, ObjectType } from 'type-graphql';

////////ENTITY EXAMPLE
@ObjectType()
@Entity()
export class Word extends BaseEntity {
   @PrimaryGeneratedColumn()
   @Field(type => ID)
   id: number;

   @Column()
   @Field()
   word: string;
}
