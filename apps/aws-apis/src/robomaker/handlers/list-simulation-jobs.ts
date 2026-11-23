import type { RouteHandler } from '@hono/zod-openapi'
import type { postListSimulationJobsRoute } from '../routes'

export const postListSimulationJobsRouteHandler: RouteHandler<
  typeof postListSimulationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
