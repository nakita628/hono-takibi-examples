import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinKeepAliveVersionRoute } from '../routes'

export const getMinKeepAliveVersionRouteHandler: RouteHandler<
  typeof getMinKeepAliveVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
