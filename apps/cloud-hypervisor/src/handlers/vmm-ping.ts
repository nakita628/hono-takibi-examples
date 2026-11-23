import type { RouteHandler } from '@hono/zod-openapi'
import type { getVmmPingRoute } from '../routes'

export const getVmmPingRouteHandler: RouteHandler<typeof getVmmPingRoute> = async (c) => {
  throw new Error('Not implemented')
}
