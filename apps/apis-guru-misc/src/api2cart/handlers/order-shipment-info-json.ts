import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderShipmentInfoJsonRoute } from '../routes'

export const getOrderShipmentInfoJsonRouteHandler: RouteHandler<
  typeof getOrderShipmentInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
