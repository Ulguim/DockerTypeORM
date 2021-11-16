import {
  Column,
  CreateDateColumn,
  Entity, 
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EncryptionTransformer } from 'typeorm-encrypted';
import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
@Entity()
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    transformer: new EncryptionTransformer({
      key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      iv: 'ff5ac19190424b1d88f9419ef949ae56'
    })
  })
 @MaxLength(50, { message: 'O tamanho máximo do nome é de 50 caracteres' })
 @MinLength(3, { message: 'O tamanho mímino do nome é de 3 caracteres' })
  name: string;

  @Column({nullable:true})
  @Max(99999, { message: 'A maior chave deve ser 99999'})
  @Min(10000, { message: 'A menor chave deve ser 10000'})
  key: number;

  @Column({
    type: "varchar",
    nullable: false,
    transformer: new EncryptionTransformer({
      key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      iv: 'ff5ac19190424b1d88f9419ef949ae56'
    })
  })  
  @IsEmail()
  email: string;



  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}