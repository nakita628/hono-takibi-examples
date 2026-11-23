import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelOrRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelOrRefundHandler = app.openapi(postCancelOrRefundRoute, (c) => {
  throw new Error('Not implemented')
})
