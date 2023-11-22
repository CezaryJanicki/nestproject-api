import { IsNotEmpty, Length, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  client: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
