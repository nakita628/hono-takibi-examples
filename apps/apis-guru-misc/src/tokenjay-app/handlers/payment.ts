import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentStateRequestIdRoute, postPaymentAddrequestRoute } from '../routes'

export const postPaymentAddrequestRouteHandler: RouteHandler<
  typeof postPaymentAddrequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentStateRequestIdRouteHandler: RouteHandler<
  typeof getPaymentStateRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
