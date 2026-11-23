import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeConnectorEntityRoute } from '../routes'

export const postDescribeConnectorEntityRouteHandler: RouteHandler<
  typeof postDescribeConnectorEntityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
