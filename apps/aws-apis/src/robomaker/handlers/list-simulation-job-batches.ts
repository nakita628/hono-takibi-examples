import type { RouteHandler } from '@hono/zod-openapi'
import type { postListSimulationJobBatchesRoute } from '../routes'

export const postListSimulationJobBatchesRouteHandler: RouteHandler<
  typeof postListSimulationJobBatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
