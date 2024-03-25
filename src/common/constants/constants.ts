export const MONGOOSE_STATUS = {
  CONNECTED: ' Mongo Db is Connected successfully',
  DISCONNECTED: ' Mongo Db is DIS_Connected successfully',
  CONNECTING: ' Mongo Db is Connecting...',
  DISCONNECTING: ' Mongo Db is DIS_Connecting...',
  UNKNOWN: 'MongoDB Status is unknown..',
};

export enum Roles {
  ADMIN = 'admin',
  SELLER = 'Seller',
  SUPPORTER = 'supporter',
  CUSTOMER = 'customer',
}

export interface IRoles {
  create?: boolean;
  update?: boolean;
  delete?: boolean;
  fetch?: boolean;
}

const rolepermissions: Record<Roles, IRoles> = {
  [Roles.ADMIN]: { create: true, update: true, delete: true, fetch: true },
  [Roles.SELLER]: { create: true, update: true, fetch: true },
  [Roles.SUPPORTER]: { delete: true, fetch: true },
  [Roles.CUSTOMER]: { fetch: true },
};
