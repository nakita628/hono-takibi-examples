import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmReceiveMigrationRoute } from '../routes'

export const putVmReceiveMigrationRouteHandler: RouteHandler<
  typeof putVmReceiveMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
