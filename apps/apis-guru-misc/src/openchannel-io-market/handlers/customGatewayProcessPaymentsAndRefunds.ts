import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCustomGatewayPaymentOwnershipIdRoute,
  postCustomGatewayRefundOwnershipIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customGatewayProcessPaymentsAndRefundsHandler = app
  .openapi(postCustomGatewayPaymentOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomGatewayRefundOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
