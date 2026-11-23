import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSimulationJobBatchRoute } from '../routes'

export const postDescribeSimulationJobBatchRouteHandler: RouteHandler<
  typeof postDescribeSimulationJobBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
