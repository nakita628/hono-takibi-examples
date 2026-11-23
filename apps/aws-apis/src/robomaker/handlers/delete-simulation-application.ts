import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteSimulationApplicationRoute } from '../routes'

export const postDeleteSimulationApplicationRouteHandler: RouteHandler<
  typeof postDeleteSimulationApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
