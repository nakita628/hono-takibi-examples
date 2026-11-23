import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderShipmentListJsonRoute } from '../routes'

export const getOrderShipmentListJsonRouteHandler: RouteHandler<
  typeof getOrderShipmentListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
