import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderShipmentAddJsonRoute } from '../routes'

export const postOrderShipmentAddJsonRouteHandler: RouteHandler<
  typeof postOrderShipmentAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
