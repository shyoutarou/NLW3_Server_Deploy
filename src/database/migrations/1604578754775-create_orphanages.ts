import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1604578754775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                { name: 'id', type: 'integer', unsigned: true,
                  isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'varchar' },
                { name: 'latitude', type: 'varchar' },
                { name: 'longitude', type: 'varchar' },
                { name: 'about', type: 'text'},
                { name: 'instructions', type: 'text' },
                { name: 'opening_hours', type: 'varchar' },              
                { name: 'open_on_weekends', type: 'boolean', default: false },
                { name: 'whatsapp', type: 'varchar', isNullable:true},
                { name: "user_id", type: "integer", isNullable:true},
                { name: 'permission', type: 'boolean', default: false },
            ],
            foreignKeys: [
              {
                  name: "UserId",
                  columnNames: ["user_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "users",
                  onUpdate: "CASCADE",
                  onDelete: "CASCADE"
              }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');        
    }

}
