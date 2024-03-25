import { Global, Module } from '@nestjs/common';
import { DatabaseConfigServiceService } from './service/database-config.service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionCheck } from './client/connectCheck';

import { UserSchema } from './schemas/user.schema';
import { RolesSchema } from './schemas/roles.schema'

const MODELS = [
  { name: 'User', schema: UserSchema },
  { name: 'Roles', schema: RolesSchema },
];

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConfigServiceService,
    }),
    MongooseModule.forFeature(MODELS),
  ],
  providers: [connectionCheck],
  exports: [MongooseModule],
})
export class DatabaseModule {}
