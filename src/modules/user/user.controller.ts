import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { UserService } from './service/user.service';
import { userDTO } from './dto/user.dto';
import { Response, Request } from 'express';
import { loginDTO } from './dto/login.dto';

import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  public async createUser(
    @Body() body: userDTO,
    @Res() response: Response,
  ): Promise<any> {
    const user = await this.userService.createUser(body);
    response.status(200).send(user);
  }

  @Post('/login')
  public async loginUser(
    @Body() body: loginDTO,
    @Res() response: Response,
  ): Promise<any> {
    const user = await this.userService.loginUser(body);
    response.status(200).send(user);
  }
}
