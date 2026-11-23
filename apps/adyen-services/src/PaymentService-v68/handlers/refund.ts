import { OpenAPIHono } from '@hono/zod-openapi'
import { postRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const refundHandler = app.openapi(postRefundRoute, (c) => {
  throw new Error('Not implemented')
})
