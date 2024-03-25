import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IUser } from '../../../common/interfaces/user';
import mongoose from 'mongoose';
import { userDTO } from '../dto/user.dto';

import * as bcrypt from 'bcrypt';
import { loginDTO } from '../dto/login.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private user: mongoose.Model<IUser>) {}

  public async createUser(payload: userDTO): Promise<any> {
    try {
      const saltRounds = process.env['PASSWORD_SALT_ROUNDS'];
      const hashedPassword = await bcrypt.hash(
        payload.password,
        Number(saltRounds),
      );
      payload.password = hashedPassword;
      const user = new this.user(payload);
      return await user.save();
    } catch (e) {
      throw new InternalServerErrorException(' Internal Server error');
    }
  }

  public async loginUser(payload: loginDTO): Promise<any> {
    try {
      const user = await this.user.find({ userName: payload.userName }).exec();
      console.log(user);
      const checkPassword = await bcrypt.compare(
        payload.password,
        user[0].password,
      );
      if (!checkPassword) {
        throw new UnauthorizedException({
          message: 'User ID/ Password is invalid',
        });
      }
      return user;
    } catch (e) {
      throw new InternalServerErrorException('User ID/ Password is invalid');
    }
  }
}
