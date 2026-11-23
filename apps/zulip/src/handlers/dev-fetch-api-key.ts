import { OpenAPIHono } from '@hono/zod-openapi'
import { postDevFetchApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const devFetchApiKeyHandler = app.openapi(postDevFetchApiKeyRoute, (c) => {
  throw new Error('Not implemented')
})
