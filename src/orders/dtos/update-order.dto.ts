import { IsNotEmpty, IsString, Length, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  client: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
