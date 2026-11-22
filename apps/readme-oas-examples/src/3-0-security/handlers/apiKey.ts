import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingApiKeyRoute, postAnythingApiKeyRoute, putAnythingApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
  .openapi(getAnythingApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
