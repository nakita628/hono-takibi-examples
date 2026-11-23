import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSimulationJobRoute } from '../routes'

export const postDescribeSimulationJobRouteHandler: RouteHandler<
  typeof postDescribeSimulationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
