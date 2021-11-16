import {MigrationInterface, QueryRunner} from "typeorm";

export class CacheTable1637026165492 implements MigrationInterface {
    name = 'CacheTable1637026165492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonId"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_ea6aa4b6228f4941691a9be2620" UNIQUE ("description")`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_ea6aa4b6228f4941691a9be2620"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId")`);
    }

}
