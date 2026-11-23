import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartSimulationJobBatchRoute } from '../routes'

export const postStartSimulationJobBatchRouteHandler: RouteHandler<
  typeof postStartSimulationJobBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
