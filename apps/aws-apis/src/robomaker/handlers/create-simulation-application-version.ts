import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateSimulationApplicationVersionRoute } from '../routes'

export const postCreateSimulationApplicationVersionRouteHandler: RouteHandler<
  typeof postCreateSimulationApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
