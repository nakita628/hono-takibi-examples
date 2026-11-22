import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingPathLabelPrimitiveArrayObjectRoute,
  getAnythingPathMatrixPrimitiveArrayObjectRoute,
  getAnythingPathPrimitiveArrayObjectRoute,
  getAnythingPathSimplePrimitiveArrayObjectRoute,
  postAnythingPathLabelPrimitiveArrayObjectRoute,
  postAnythingPathMatrixPrimitiveArrayObjectRoute,
  postAnythingPathSimplePrimitiveArrayObjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app
  .openapi(getAnythingPathPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathMatrixPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingPathMatrixPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathLabelPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingPathLabelPrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPathSimplePrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingPathSimplePrimitiveArrayObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
