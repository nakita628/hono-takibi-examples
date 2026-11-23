import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const requestApiKeyHandler = app.openapi(postRequestApiKeyRoute, (c) => {
  throw new Error('Not implemented')
})
