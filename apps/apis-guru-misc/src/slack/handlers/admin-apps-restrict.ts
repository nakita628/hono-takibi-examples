import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminAppsRestrictRoute } from '../routes'

export const postAdminAppsRestrictRouteHandler: RouteHandler<
  typeof postAdminAppsRestrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}
