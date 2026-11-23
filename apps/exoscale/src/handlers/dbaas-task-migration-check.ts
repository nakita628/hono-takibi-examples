import type { RouteHandler } from '@hono/zod-openapi'
import type { postDbaasTaskMigrationCheckServiceRoute } from '../routes'

export const postDbaasTaskMigrationCheckServiceRouteHandler: RouteHandler<
  typeof postDbaasTaskMigrationCheckServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
