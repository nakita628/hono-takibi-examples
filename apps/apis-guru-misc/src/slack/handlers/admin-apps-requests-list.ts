import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminAppsRequestsListRoute } from '../routes'

export const getAdminAppsRequestsListRouteHandler: RouteHandler<
  typeof getAdminAppsRequestsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
