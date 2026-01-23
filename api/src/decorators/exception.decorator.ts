import { applyDecorators, Injectable, Type, Catch, ExceptionFilter, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

export const EXCEPTION_METADATA_KEY = Reflector.createDecorator<boolean>();

export function Exception(catchTarget?: Type<any> | Type<any>[]): ClassDecorator {
  // Use the safety logic from the uncommented version to handle empty targets
  const targets = Array.isArray(catchTarget) ? catchTarget : (catchTarget ? [catchTarget] : []);
  
  return applyDecorators(
    Injectable(),
    Catch(...targets),
    EXCEPTION_METADATA_KEY(true)
  );
}

// Cleaner utility: No need to pass 'reflector' manually every time
export const isException = (target: Function | Type<any>) => reflector.get(EXCEPTION_METADATA_KEY, target) === true;
