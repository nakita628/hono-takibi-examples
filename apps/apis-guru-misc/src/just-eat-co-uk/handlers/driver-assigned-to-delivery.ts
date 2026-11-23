import type { RouteHandler } from '@hono/zod-openapi'
import type { putDriverAssignedToDeliveryRoute } from '../routes'

export const putDriverAssignedToDeliveryRouteHandler: RouteHandler<
  typeof putDriverAssignedToDeliveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
