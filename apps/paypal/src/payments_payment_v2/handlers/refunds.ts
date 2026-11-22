import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2PaymentsRefundsRefundIdRoute } from '../routes'

const app = new OpenAPIHono()

export const refundsHandler = app.openapi(getV2PaymentsRefundsRefundIdRoute, (c) => {
  throw new Error('Not implemented')
})
