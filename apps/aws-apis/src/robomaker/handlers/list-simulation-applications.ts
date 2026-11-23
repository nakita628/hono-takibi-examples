import type { RouteHandler } from '@hono/zod-openapi'
import type { postListSimulationApplicationsRoute } from '../routes'

export const postListSimulationApplicationsRouteHandler: RouteHandler<
  typeof postListSimulationApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
