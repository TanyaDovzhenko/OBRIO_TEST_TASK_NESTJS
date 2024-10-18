import { BadRequestException } from '@nestjs/common';

export class ExistingException extends BadRequestException {
  constructor(entity: string, exist: boolean) {
    const message = exist
      ? `${entity} already exists.`
      : `${entity} not exists.`;
    super(message);
  }
}
