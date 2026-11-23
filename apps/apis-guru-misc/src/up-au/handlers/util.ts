import type { RouteHandler } from '@hono/zod-openapi'
import type { getUtilPingRoute } from '../routes'

export const getUtilPingRouteHandler: RouteHandler<typeof getUtilPingRoute> = async (c) => {
  throw new Error('Not implemented')
}
