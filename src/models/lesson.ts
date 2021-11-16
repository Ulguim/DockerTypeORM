import { type } from 'os';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import Class from './Class';

@Entity('lesson')
export default class lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    unique: true,
  })
  
  @Column()
  description: string;

  @ManyToOne(type => Class, lessons => lesson, { eager: true })
  class: Class;
  

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  
}
