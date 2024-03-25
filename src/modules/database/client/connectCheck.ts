import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { MONGOOSE_STATUS } from '../../../common/constants/constants';

@Injectable()
export class connectionCheck implements OnModuleInit {
  private readonly logger = new Logger(connectionCheck.name);
  constructor(@InjectConnection() private readonly connection: Connection) {}
  onModuleInit() {
    const connectionStatus = this.connection.readyState;

    switch (connectionStatus) {
      case 0:
        this.logger.log(MONGOOSE_STATUS.DISCONNECTED);
        break;
      case 1:
        this.logger.log(MONGOOSE_STATUS.CONNECTED);
        break;
      case 2:
        this.logger.log(MONGOOSE_STATUS.CONNECTING);
        break;
      case 3:
        this.logger.log(MONGOOSE_STATUS.DISCONNECTING);
        break;
      default:
        this.logger.log(MONGOOSE_STATUS.UNKNOWN);
        break;
    }
  }
}
