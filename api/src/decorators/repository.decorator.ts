import { applyDecorators, Injectable, SetMetadata } from '@nestjs/common';

export const REPOSITORY_METADATA_KEY = 'custom:repository';

export function Repository(): ClassDecorator {
  return applyDecorators(
    Injectable(),
    SetMetadata(REPOSITORY_METADATA_KEY, true),
  );
}

export function isRepository(target: Function): boolean {
  return Reflect.getMetadata(REPOSITORY_METADATA_KEY, target) === true;
}