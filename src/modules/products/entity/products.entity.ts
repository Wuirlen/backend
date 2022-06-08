import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  image: string;

  @Column({ type: 'float4' })
  price: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
