import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiKeyRoute, getApiKeyRoute, patchApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
  .openapi(deleteApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
