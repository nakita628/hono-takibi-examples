import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteKeysKeyIdRoute, getKeysKeyIdRoute, getKeysRoute, postKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
