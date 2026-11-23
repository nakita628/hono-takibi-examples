import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnythingRoute } from '../routes'

export const getAnythingRouteHandler: RouteHandler<typeof getAnythingRoute> = async (c) => {
  throw new Error('Not implemented')
}
