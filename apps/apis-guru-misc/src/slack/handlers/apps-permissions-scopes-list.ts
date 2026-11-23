import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsPermissionsScopesListRoute } from '../routes'

export const getAppsPermissionsScopesListRouteHandler: RouteHandler<
  typeof getAppsPermissionsScopesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
