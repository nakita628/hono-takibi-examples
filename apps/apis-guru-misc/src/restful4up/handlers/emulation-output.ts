import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmulationOutputRoute } from '../routes'

export const postEmulationOutputRouteHandler: RouteHandler<
  typeof postEmulationOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}
