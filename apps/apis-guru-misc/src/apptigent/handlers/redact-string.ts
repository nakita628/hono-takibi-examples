import { OpenAPIHono } from '@hono/zod-openapi'
import { postRedactStringRoute } from '../routes'

const app = new OpenAPIHono()

export const redactStringHandler = app.openapi(postRedactStringRoute, (c) => {
  throw new Error('Not implemented')
})
