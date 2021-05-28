import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  firstName: string;
  @Column({ type: 'varchar', length: 255 })
  lastName: string;
  @Column({ type: 'varchar', length: 255 })
  email: string;
  @Column({ type: 'varchar', length: 255 })
  address: string;
  @Column({ type: 'varchar', length: 255 })
  phone: string;
  @Column({ type: 'varchar', length: 255 })
  userName: string;
  @Column({ type: 'varchar', length: 255 })
  password: string;
  @Column({ type: 'varchar', length: 255 })
  createdAt: string;
  @Column({ type: 'varchar', length: 255 })
  role: string;
}
