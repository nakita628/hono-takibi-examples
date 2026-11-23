import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderCancelledRoute } from '../routes'

const app = new OpenAPIHono()

export const orderCancelledHandler = app.openapi(postOrderCancelledRoute, (c) => {
  throw new Error('Not implemented')
})
