import type { RouteHandler } from '@hono/zod-openapi'
import type { getPingRoute } from '../routes'

export const getPingRouteHandler: RouteHandler<typeof getPingRoute> = async (c) => {
  throw new Error('Not implemented')
}
