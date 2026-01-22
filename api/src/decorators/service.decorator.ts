import { applyDecorators, Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

export const ServiceMetadata = Reflector.createDecorator<boolean>();

export function Service(): ClassDecorator {
  return applyDecorators(
    Injectable(),
    ServiceMetadata(true),
  );
}

// Change the target type to Function or Type<any> to match Reflector.get
export function isService(target: Function | Type<any>): boolean {
  return reflector.get(ServiceMetadata, target) === true;
}
