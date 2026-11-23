import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeAlertRoute } from '../routes'

export const postDescribeAlertRouteHandler: RouteHandler<typeof postDescribeAlertRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
