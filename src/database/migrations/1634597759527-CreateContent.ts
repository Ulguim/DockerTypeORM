import {MigrationInterface, QueryRunner} from "typeorm";

export  default class CreateContent1634597759527 implements MigrationInterface {
    name = 'CreateContent1634597759527';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "linkContent" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
