import { OpenAPIHono } from '@hono/zod-openapi'
import { postFetchApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const fetchApiKeyHandler = app.openapi(postFetchApiKeyRoute, (c) => {
  throw new Error('Not implemented')
})
