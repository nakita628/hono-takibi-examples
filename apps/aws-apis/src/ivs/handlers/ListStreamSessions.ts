import { OpenAPIHono } from '@hono/zod-openapi'
import { postListStreamSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListStreamSessionsHandler = app.openapi(postListStreamSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
