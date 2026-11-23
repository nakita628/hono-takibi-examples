import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsPermissionsInfoRoute } from '../routes'

export const getAppsPermissionsInfoRouteHandler: RouteHandler<
  typeof getAppsPermissionsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
