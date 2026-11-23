import { OpenAPIHono } from '@hono/zod-openapi'
import { postRefundNotPaidOutTransfersRoute } from '../routes'

const app = new OpenAPIHono()

export const refundNotPaidOutTransfersHandler = app.openapi(
  postRefundNotPaidOutTransfersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
