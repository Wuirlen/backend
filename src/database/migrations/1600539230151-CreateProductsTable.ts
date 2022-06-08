import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductsTable1600539230151 implements MigrationInterface {
  private table = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'brand',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'image',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'price',
        type: 'float4',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
