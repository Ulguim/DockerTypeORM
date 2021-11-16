import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Lesson from './lesson';


@Entity('class')
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(type => Lesson, Class => Class)
  lessons: Lesson[];

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @Column()
  duration: number;

  @Column()
  exp: number;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At' })
  updatedAt: Date;
}
