import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    TableInheritance,
  } from 'typeorm';
  
  // SuperClasse
  @Entity()
  @TableInheritance({column: { type:'varchar', name: 'type'} } )
  export default abstract class Institution {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    cnpj: string;
    
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
  
  
  
  
  
  }