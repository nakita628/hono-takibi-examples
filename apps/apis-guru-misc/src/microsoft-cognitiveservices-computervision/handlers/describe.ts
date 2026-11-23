import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeRoute } from '../routes'

export const postDescribeRouteHandler: RouteHandler<typeof postDescribeRoute> = async (c) => {
  throw new Error('Not implemented')
}
