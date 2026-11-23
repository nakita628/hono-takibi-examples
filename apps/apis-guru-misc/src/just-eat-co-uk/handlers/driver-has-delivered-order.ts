import type { RouteHandler } from '@hono/zod-openapi'
import type { putDriverHasDeliveredOrderRoute } from '../routes'

export const putDriverHasDeliveredOrderRouteHandler: RouteHandler<
  typeof putDriverHasDeliveredOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
