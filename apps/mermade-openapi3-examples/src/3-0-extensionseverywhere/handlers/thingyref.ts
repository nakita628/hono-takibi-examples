import type { RouteHandler } from '@hono/zod-openapi'
import type { getThingyrefRoute } from '../routes'

export const getThingyrefRouteHandler: RouteHandler<typeof getThingyrefRoute> = async (c) => {
  throw new Error('Not implemented')
}
