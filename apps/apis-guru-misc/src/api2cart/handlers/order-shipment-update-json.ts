import type { RouteHandler } from '@hono/zod-openapi'
import type { putOrderShipmentUpdateJsonRoute } from '../routes'

export const putOrderShipmentUpdateJsonRouteHandler: RouteHandler<
  typeof putOrderShipmentUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
