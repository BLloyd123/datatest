import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;
}
