import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

/**
 * Data Transfer Object (DTO) for updating an existing product.
 * It extends the CreateProductDto and marks all properties as optional.
 * This is achieved using the PartialType utility from @nestjs/mapped-types.
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {}
