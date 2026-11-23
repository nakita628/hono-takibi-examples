import type { RouteHandler } from '@hono/zod-openapi'
import type { getSksClusterVersionRoute } from '../routes'

export const getSksClusterVersionRouteHandler: RouteHandler<
  typeof getSksClusterVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
