import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'cities' })
export class City {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
