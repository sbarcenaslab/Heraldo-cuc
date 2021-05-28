import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  title: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'varchar', length: 255 })
  journalist: string;
  @Column({ type: 'boolean' })
  published: boolean;
  @Column({ type: 'varchar', length: 255 })
  category: string;
  @Column({ type: 'varchar', length: 255 })
  createdAt: string;
  @Column({ type: 'varchar', length: 255 })
  hour: string;
  @Column({ type: 'varchar', length: 255 })
  image: string;
  @Column({ type: 'text' })
  resume: string;
}
