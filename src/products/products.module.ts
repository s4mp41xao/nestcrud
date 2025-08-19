import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { buildSchema } from '@typegoose/typegoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './models/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        // This line builds a Mongoose-compatible schema from my Typegoose class.
        schema: buildSchema(Product),
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
