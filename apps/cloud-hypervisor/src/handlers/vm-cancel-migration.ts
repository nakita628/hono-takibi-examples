import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmCancelMigrationRoute } from '../routes'

export const putVmCancelMigrationRouteHandler: RouteHandler<
  typeof putVmCancelMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
