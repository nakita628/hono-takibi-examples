import type { RouteHandler } from '@hono/zod-openapi'
import type { putRedeliveryRequestedRoute } from '../routes'

export const putRedeliveryRequestedRouteHandler: RouteHandler<
  typeof putRedeliveryRequestedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
