import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeConnectorRoute } from '../routes'

export const postDescribeConnectorRouteHandler: RouteHandler<
  typeof postDescribeConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
