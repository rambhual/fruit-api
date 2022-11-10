import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import CategoryEntity from '@v1/category/schema/category.entity';

@Entity('products')
export default class ProductEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn('increment')
  readonly id: number = 1;

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  name: string = '';

  @ApiProperty({ type: String, maxLength: 255 })
  @Column({ length: 255 })
  desc: string = '';

  @ApiProperty({ type: Number })
  @Column({ type: 'decimal' })
  price: number = 0.0;

  @ApiProperty({ type: Array<String> })
  @Column({ type: 'simple-array', nullable: true })
  image_urls: string[] | undefined;

  @ApiProperty({ type: Boolean })
  @Column({ type: 'boolean', default: false })
  in_stock: boolean = false;

  @ManyToOne(() => CategoryEntity, (c) => c.products)
  category: CategoryEntity | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;
}
