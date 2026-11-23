import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteOrderShipmentDeleteJsonRoute } from '../routes'

export const deleteOrderShipmentDeleteJsonRouteHandler: RouteHandler<
  typeof deleteOrderShipmentDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
