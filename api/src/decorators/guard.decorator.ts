import { applyDecorators, Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

// --- 1. Guard Decorator ---
export const GUARD_METADATA_KEY = Reflector.createDecorator<boolean>();
export function Guard(): ClassDecorator {
  return applyDecorators(Injectable(), GUARD_METADATA_KEY(true));
}
export const isGuard = (target: Function | Type<any>) => reflector.get(GUARD_METADATA_KEY, target) === true;