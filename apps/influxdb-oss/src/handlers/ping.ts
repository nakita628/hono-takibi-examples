import type { RouteHandler } from '@hono/zod-openapi'
import type { getPingRoute, headPingRoute } from '../routes'

export const getPingRouteHandler: RouteHandler<typeof getPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headPingRouteHandler: RouteHandler<typeof headPingRoute> = async (c) => {
  throw new Error('Not implemented')
}
