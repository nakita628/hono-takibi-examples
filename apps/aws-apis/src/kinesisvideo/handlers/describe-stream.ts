import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeStreamRoute } from '../routes'

export const postDescribeStreamRouteHandler: RouteHandler<typeof postDescribeStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
