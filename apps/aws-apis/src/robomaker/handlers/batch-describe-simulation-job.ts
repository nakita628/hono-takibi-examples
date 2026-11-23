import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchDescribeSimulationJobRoute } from '../routes'

export const postBatchDescribeSimulationJobRouteHandler: RouteHandler<
  typeof postBatchDescribeSimulationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
