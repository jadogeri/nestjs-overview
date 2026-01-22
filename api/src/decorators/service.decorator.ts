import { applyDecorators, Injectable, SetMetadata } from '@nestjs/common';

export const SERVICE_METADATA_KEY = 'custom:service';

export function Service(): ClassDecorator {
  return applyDecorators(
    Injectable(),
    SetMetadata(SERVICE_METADATA_KEY, true),
  );
}

export function isService(target: Function): boolean {
  return Reflect.getMetadata(SERVICE_METADATA_KEY, target) === true;
}