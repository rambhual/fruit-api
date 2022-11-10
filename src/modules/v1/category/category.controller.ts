import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CategoryService } from './category.service';
import CategoryEntity from './schema/category.entity';

@Crud({
  query: {
    alwaysPaginate: true,
  },
  model: {
    type: CategoryEntity,
  },
})
@ApiTags('Category')
@Controller()
export class CategoryController implements CrudController<CategoryEntity> {
  constructor(public service: CategoryService) {}
}
