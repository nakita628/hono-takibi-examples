import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnythingAnythingRoute,
  deleteAnythingRoute,
  getAnythingAnythingRoute,
  getAnythingRoute,
  patchAnythingAnythingRoute,
  patchAnythingRoute,
  postAnythingAnythingRoute,
  postAnythingRoute,
  putAnythingAnythingRoute,
  putAnythingRoute,
  traceAnythingAnythingRoute,
  traceAnythingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(deleteAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(traceAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnythingAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(traceAnythingAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
