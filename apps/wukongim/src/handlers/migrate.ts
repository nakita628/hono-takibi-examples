import type { RouteHandler } from '@hono/zod-openapi'
import type { getMigrateResultRoute } from '../routes'

export const getMigrateResultRouteHandler: RouteHandler<typeof getMigrateResultRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
