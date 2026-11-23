import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelSimulationJobBatchRoute } from '../routes'

export const postCancelSimulationJobBatchRouteHandler: RouteHandler<
  typeof postCancelSimulationJobBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
