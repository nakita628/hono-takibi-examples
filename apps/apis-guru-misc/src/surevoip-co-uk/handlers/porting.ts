import type { RouteHandler } from '@hono/zod-openapi'
import type { getPortingRoute } from '../routes'

export const getPortingRouteHandler: RouteHandler<typeof getPortingRoute> = async (c) => {
  throw new Error('Not implemented')
}
