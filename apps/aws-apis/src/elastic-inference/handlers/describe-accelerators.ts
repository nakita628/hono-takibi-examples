import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeAcceleratorsRoute } from '../routes'

export const postDescribeAcceleratorsRouteHandler: RouteHandler<
  typeof postDescribeAcceleratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
