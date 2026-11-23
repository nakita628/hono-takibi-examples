import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateSimulationApplicationRoute } from '../routes'

export const postCreateSimulationApplicationRouteHandler: RouteHandler<
  typeof postCreateSimulationApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
