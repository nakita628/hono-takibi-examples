import type { RouteHandler } from '@hono/zod-openapi'
import type { getInternalNetmonCorrelationRoute } from '../routes'

export const getInternalNetmonCorrelationRouteHandler: RouteHandler<
  typeof getInternalNetmonCorrelationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
