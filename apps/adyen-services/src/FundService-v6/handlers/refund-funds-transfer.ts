import { OpenAPIHono } from '@hono/zod-openapi'
import { postRefundFundsTransferRoute } from '../routes'

const app = new OpenAPIHono()

export const refundFundsTransferHandler = app.openapi(postRefundFundsTransferRoute, (c) => {
  throw new Error('Not implemented')
})
