import { OpenAPIHono } from '@hono/zod-openapi'
import { postLateOrderQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const lateOrderQueryHandler = app.openapi(postLateOrderQueryRoute, (c) => {
  throw new Error('Not implemented')
})
