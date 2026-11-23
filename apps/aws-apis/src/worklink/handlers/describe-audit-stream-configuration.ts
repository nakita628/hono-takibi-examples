import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeAuditStreamConfigurationRoute } from '../routes'

export const postDescribeAuditStreamConfigurationRouteHandler: RouteHandler<
  typeof postDescribeAuditStreamConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
