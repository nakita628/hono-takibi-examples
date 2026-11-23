import type { RouteHandler } from '@hono/zod-openapi'
import type { putOrderIsReadyForPickupRoute } from '../routes'

export const putOrderIsReadyForPickupRouteHandler: RouteHandler<
  typeof putOrderIsReadyForPickupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
