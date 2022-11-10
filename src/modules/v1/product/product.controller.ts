import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProductService } from './product.service';
import ProductEntity from './schema/product.entity';

@Crud({
  query: {
    alwaysPaginate: true,
  },
  model: {
    type: ProductEntity,
  },
})
@ApiTags("Product")
@Controller()
export class ProductController implements CrudController<ProductEntity> {
  constructor(public service: ProductService) {}
}
