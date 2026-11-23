import type { RouteHandler } from '@hono/zod-openapi'
import type { putDeliveryFailedRoute } from '../routes'

export const putDeliveryFailedRouteHandler: RouteHandler<typeof putDeliveryFailedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
