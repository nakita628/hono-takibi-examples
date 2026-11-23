import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeConnectorsRoute } from '../routes'

export const postDescribeConnectorsRouteHandler: RouteHandler<
  typeof postDescribeConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
