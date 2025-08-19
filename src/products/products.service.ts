// Import necessary decorators and classes from NestJS and Mongoose.
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './models/product.model';
import { CreateProductDto } from './dto/create-product.dto';

/**
 * @Injectable() decorator marks the class as a provider that can be injected
 * into other components (like controllers) through dependency injection.
 * This is the service that will handle all the business logic for products.
 */
@Injectable()
export class ProductsService {
  /**
   * The constructor injects the Mongoose Model for the 'Product' schema.
   * @InjectModel(Product.name) is a decorator that makes the Product model
   * available to this service. 'Product.name' is used as the injection token.
   * 'private readonly productModel' is a TypeScript shorthand to declare and
   * initialize a private, read-only member in one place.
   * @param productModel The Mongoose model for the Product document.
   */
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  /**
   * Creates a new product in the database.
   * This is an async method because database operations are asynchronous.
   * @param createProductDto - The data transfer object containing the new product's data.
   * @returns A Promise that resolves to the newly created product document.
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    // Create a new instance of the Product model with the data from the DTO.
    const createdProduct = new this.productModel(createProductDto);
    // Save the new product instance to the database and return the result.
    return createdProduct.save();
  }

  /**
   * Retrieves all products from the database.
   * @returns A Promise that resolves to an array of all product documents.
   */
  async findAll(): Promise<Product[]> {
    // Use the find() method on the model to get all documents.
    // .exec() executes the query and returns a promise.
    return this.productModel.find().exec();
  }

  /**
   * Retrieves a single product by its ID.
   * @param id - The unique identifier of the product.
   * @returns A Promise that resolves to the product document or null if not found.
   */
  async findOne(id: string): Promise<Product | null> {
    // findById is a Mongoose helper to find a document by its _id.
    return this.productModel.findById(id).exec();
  }

  /**
   * Updates an existing product by its ID.
   * @param id - The unique identifier of the product to update.
   * @param updateProductDto - The data to update the product with. `Partial<Product>` means
   *                           that the DTO can contain any subset of the Product's properties.
   * @returns A Promise that resolves to the updated product document.
   */
  async update(
    id: string,
    updateProductDto: Partial<Product>,
  ): Promise<Product | null> {
    // findByIdAndUpdate finds a document by ID and updates it.
    // The { new: true } option ensures that the updated document is returned.
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  /**
   * Deletes a product by its ID.
   * @param id - The unique identifier of the product to delete.
   * @returns A Promise that resolves to the deleted product document.
   */
  async remove(id: string): Promise<Product | null> {
    // findByIdAndDelete finds a document by ID and removes it from the database.
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
