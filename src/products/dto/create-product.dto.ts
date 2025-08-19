import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

/**
 * Data Transfer Object (DTO) for creating a new product.
 * It defines the shape of the data that should be sent in the request body.
 * The decorators from class-validator are used to enforce validation rules.
 */
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  memory: string;

  @IsString()
  @IsNotEmpty()
  storage: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;
}
