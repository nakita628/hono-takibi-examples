import { OpenAPIHono } from '@hono/zod-openapi'
import { postVoidPendingRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const voidPendingRefundHandler = app.openapi(postVoidPendingRefundRoute, (c) => {
  throw new Error('Not implemented')
})
