import {
    Entity,
    Column,
    PrimaryGeneratedColumn,  
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  
  @Entity('content')
  export default class Content {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    
  
    @Column()
    description: string;
  
    @Column()
    linkContent: string;
  
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
  }