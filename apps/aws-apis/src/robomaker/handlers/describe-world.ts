import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeWorldRoute } from '../routes'

export const postDescribeWorldRouteHandler: RouteHandler<typeof postDescribeWorldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
