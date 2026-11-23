import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderRefundAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderRefundAddJsonHandler = app.openapi(postOrderRefundAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
