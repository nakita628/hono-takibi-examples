import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderShipmentTrackingAddJsonRoute } from '../routes'

export const postOrderShipmentTrackingAddJsonRouteHandler: RouteHandler<
  typeof postOrderShipmentTrackingAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
