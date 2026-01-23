import { applyDecorators, Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

// --- 4. Middleware Decorator ---
export const MIDDLEWARE_METADATA_KEY = Reflector.createDecorator<boolean>();
export function Middleware(): ClassDecorator {
  return applyDecorators(Injectable(), MIDDLEWARE_METADATA_KEY(true));
}
export const isMiddleware = (target: Function | Type<any>) => reflector.get(MIDDLEWARE_METADATA_KEY, target) === true;
