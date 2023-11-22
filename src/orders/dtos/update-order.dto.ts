import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  client: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
