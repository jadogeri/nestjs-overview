import { applyDecorators, Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

export const PIPE_METADATA_KEY = Reflector.createDecorator<boolean>();
export function Pipe(): ClassDecorator {
  return applyDecorators(Injectable(), PIPE_METADATA_KEY(true));
}
export const isPipe = (target: Function | Type<any>) => reflector.get(PIPE_METADATA_KEY, target) === true;
