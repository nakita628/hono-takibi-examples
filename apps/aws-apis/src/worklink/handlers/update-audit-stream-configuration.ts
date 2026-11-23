import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAuditStreamConfigurationRoute } from '../routes'

export const postUpdateAuditStreamConfigurationRouteHandler: RouteHandler<
  typeof postUpdateAuditStreamConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
