import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Observable } from 'rxjs';

import { IRoles } from '../constants/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@InjectModel('Roles') private roles: mongoose.Model<IRoles>) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const checkRoles: any = await this.roles.find({
      type: request?.body?.role.toLowerCase(),
    });
    const permissionsArray = checkRoles[0].permissions;
    const hasPermissions = permissionsArray.some((role) =>
      permissionsArray.includes(role),
    );

    if (!hasPermissions) {
      throw new UnauthorizedException('You are not allowed');
    }

    return true;
  }
}
