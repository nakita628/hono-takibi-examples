import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmSendMigrationRoute } from '../routes'

export const putVmSendMigrationRouteHandler: RouteHandler<typeof putVmSendMigrationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
