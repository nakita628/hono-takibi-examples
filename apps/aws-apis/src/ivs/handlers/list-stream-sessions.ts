import { OpenAPIHono } from '@hono/zod-openapi'
import { postListStreamSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listStreamSessionsHandler = app.openapi(postListStreamSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
