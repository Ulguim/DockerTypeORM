import {MigrationInterface, QueryRunner} from "typeorm";

export default class CreateInstitutions1636310925692 implements MigrationInterface {
    name = 'CreateInstitutions1636310925692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institution" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "graduations" character varying, "year" integer, "doctors" character varying, "masters" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_f60ee4ff0719b7df54830b39087" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_829e3ef7ee5db8aed1a64a2545" ON "institution" ("type") `);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "updated_At"`);
       // await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_ea6aa4b6228f4941691a9be2680" UNIQUE ("description")`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "key" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f327c28c988cbfe23a725982727" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f327c28c988cbfe23a725982727"`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "key" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ALTER COLUMN "name" SET NOT NULL`);
        //await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_ea6aa4b6228f4941691a9be2680"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP INDEX "IDX_829e3ef7ee5db8aed1a64a2545"`);
        await queryRunner.query(`DROP TABLE "institution"`);
    }

}
