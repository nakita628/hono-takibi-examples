import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminAppsApproveRoute } from '../routes'

export const postAdminAppsApproveRouteHandler: RouteHandler<
  typeof postAdminAppsApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
