import { Controller, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Param, Delete, Body } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { NotFoundException } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = this.productsService.getById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');
    this.productsService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() productData) {
    return this.productsService.create(productData);
  }
  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');

    this.productsService.updateById(id, productData);
    return { success: true };
  }
}
