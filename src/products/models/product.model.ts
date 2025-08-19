import { Prop, modelOptions, Severity } from '@typegoose/typegoose';

/**
 * Defines the schema for a Product.
 * @modelOptions decorator sets schema-level options.
 * `timestamps: true` will automatically add `createdAt` and `updatedAt` fields.
 */
@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: 'products',
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Product {
  @Prop({ required: true, trim: true })
  productName: string;

  @Prop({ required: true })
  memory: string;

  @Prop({ required: true })
  storage: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true, min: 0 })
  price: number;
}
