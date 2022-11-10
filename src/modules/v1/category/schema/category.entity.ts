import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import ProductEntity from '@v1/product/schema/product.entity';

@Entity('category')
export default class CategoryEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn("increment")
  readonly id: number = 1;

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  name: string = '';

  @OneToMany(() => ProductEntity, (p) => p.category, { cascade: true })
  products: ProductEntity[] | undefined;
}
