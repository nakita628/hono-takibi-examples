import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeFlowRoute } from '../routes'

export const postDescribeFlowRouteHandler: RouteHandler<typeof postDescribeFlowRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
