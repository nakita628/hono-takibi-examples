import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrderOrderIdRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const orderOrderIdRefundHandler = app.openapi(postV1OrderOrderIdRefundRoute, (c) => {
  throw new Error('Not implemented')
})
