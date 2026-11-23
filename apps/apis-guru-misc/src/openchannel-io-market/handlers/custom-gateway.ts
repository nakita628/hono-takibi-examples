import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postCustomGatewayPaymentOwnershipIdRoute,
  postCustomGatewayRefundOwnershipIdRoute,
} from '../routes'

export const postCustomGatewayPaymentOwnershipIdRouteHandler: RouteHandler<
  typeof postCustomGatewayPaymentOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomGatewayRefundOwnershipIdRouteHandler: RouteHandler<
  typeof postCustomGatewayRefundOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
