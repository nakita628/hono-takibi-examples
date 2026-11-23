import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsPermissionsResourcesListRoute } from '../routes'

export const getAppsPermissionsResourcesListRouteHandler: RouteHandler<
  typeof getAppsPermissionsResourcesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
