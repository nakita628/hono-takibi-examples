import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarkAllAsReadRoute } from '../routes'

const app = new OpenAPIHono()

export const markAllAsReadHandler = app.openapi(postMarkAllAsReadRoute, (c) => {
  throw new Error('Not implemented')
})
