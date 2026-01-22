import { applyDecorators, Injectable, Type, Catch, ExceptionFilter, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

// --- 1. Guard Decorator ---
export const GUARD_METADATA = Reflector.createDecorator<boolean>();
export function Guard(): ClassDecorator {
  return applyDecorators(Injectable(), GUARD_METADATA(true));
}
export const isGuard = (target: Function | Type<any>) => reflector.get(GUARD_METADATA, target) === true;

// --- 2. Pipe Decorator ---
export const PIPE_METADATA = Reflector.createDecorator<boolean>();
export function Pipe(): ClassDecorator {
  return applyDecorators(Injectable(), PIPE_METADATA(true));
}
export const isPipe = (target: Function | Type<any>) => reflector.get(PIPE_METADATA, target) === true;

// --- 3. Repository Decorator ---
export const REPO_METADATA = Reflector.createDecorator<boolean>();
export function Repository(): ClassDecorator {
  return applyDecorators(Injectable(), REPO_METADATA(true));
}
export const isRepository = (target: Function | Type<any>) => reflector.get(REPO_METADATA, target) === true;

// --- 4. Middleware Decorator ---
export const MIDDLEWARE_METADATA = Reflector.createDecorator<boolean>();
export function Middleware(): ClassDecorator {
  return applyDecorators(Injectable(), MIDDLEWARE_METADATA(true));
}
export const isMiddleware = (target: Function | Type<any>) => reflector.get(MIDDLEWARE_METADATA, target) === true;

// --- 5. Exception Filter Decorator ---
export const EXCEPTION_KEY = 'custom_exception_metadata';

// 1. Improved Decorator
export function Exception(catchTarget?: Type<any> | Type<any>[]): ClassDecorator {
  const targets = Array.isArray(catchTarget) ? catchTarget : (catchTarget ? [catchTarget] : []);
  
  return applyDecorators(
    Injectable(),
    Catch(...targets),
    SetMetadata(EXCEPTION_KEY, true)
  );
}

// 2. Fixed Utility Function
// Note: You must pass an instance of Reflector to this function
export const isException = (reflector: Reflector, target: Function | Type<any>) => {
  return reflector.get<boolean>(EXCEPTION_KEY, target) === true;
};