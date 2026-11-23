import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysIdRoute,
  getKeysIdRoute,
  getKeysRoute,
  postKeysRoute,
  putKeysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
