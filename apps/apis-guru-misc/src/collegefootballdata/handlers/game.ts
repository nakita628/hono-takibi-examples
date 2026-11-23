import type { RouteHandler } from '@hono/zod-openapi'
import type { getGameBoxAdvancedRoute } from '../routes'

export const getGameBoxAdvancedRouteHandler: RouteHandler<typeof getGameBoxAdvancedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
