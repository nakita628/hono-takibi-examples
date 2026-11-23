import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysIdIndexRoute,
  getKeysIdIndexRoute,
  getKeysIndexRoute,
  postKeysIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
