import { SetMetadata, Injectable, applyDecorators } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const REPOSITORY_METADATA_KEY = Reflector.createDecorator<boolean>();

export const Repository = (entity: Function) => {
  return applyDecorators(
    SetMetadata(REPOSITORY_METADATA_KEY, entity),
    Injectable(), // NestJS handles the application and typing here
  );
};
