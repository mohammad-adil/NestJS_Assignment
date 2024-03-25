import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Post('/create')
  @UseGuards(AuthGuard)
  public async create(
    @Body() body: any,
    @Res() response: Response,
  ): Promise<any> {
    //     const user = await this.productService.create(body);
    //     response.status(200).send(user);
  }
}
