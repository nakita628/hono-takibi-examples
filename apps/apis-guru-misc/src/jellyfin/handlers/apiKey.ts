import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAuthKeysKeyRoute, getAuthKeysRoute, postAuthKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
  .openapi(getAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
