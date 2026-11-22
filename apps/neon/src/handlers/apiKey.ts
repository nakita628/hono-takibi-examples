import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiKeysKeyIdRoute, getApiKeysRoute, postApiKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
