import { OpenAPIHono } from '@hono/zod-openapi'
import { postContainsStringRoute } from '../routes'

const app = new OpenAPIHono()

export const containsStringHandler = app.openapi(postContainsStringRoute, (c) => {
  throw new Error('Not implemented')
})
