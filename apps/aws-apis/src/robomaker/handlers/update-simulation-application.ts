import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateSimulationApplicationRoute } from '../routes'

export const postUpdateSimulationApplicationRouteHandler: RouteHandler<
  typeof postUpdateSimulationApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
