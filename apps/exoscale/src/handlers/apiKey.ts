import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiKeyIdRoute, getApiKeyIdRoute, getApiKeyRoute, postApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
  .openapi(postApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
