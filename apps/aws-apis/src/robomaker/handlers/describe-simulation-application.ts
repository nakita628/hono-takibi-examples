import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSimulationApplicationRoute } from '../routes'

export const postDescribeSimulationApplicationRouteHandler: RouteHandler<
  typeof postDescribeSimulationApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
