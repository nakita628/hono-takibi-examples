import type { RouteHandler } from '@hono/zod-openapi'
import type { getApplicationsKeyComplianceRoute } from '../routes'

export const getApplicationsKeyComplianceRouteHandler: RouteHandler<
  typeof getApplicationsKeyComplianceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
