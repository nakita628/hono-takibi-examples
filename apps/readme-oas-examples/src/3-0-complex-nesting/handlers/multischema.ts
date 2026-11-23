import type { RouteHandler } from '@hono/zod-openapi'
import type { postMultischemaOfEverythingRoute } from '../routes'

export const postMultischemaOfEverythingRouteHandler: RouteHandler<
  typeof postMultischemaOfEverythingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
