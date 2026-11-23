import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasMigrationStatusNameRoute } from '../routes'

export const getDbaasMigrationStatusNameRouteHandler: RouteHandler<
  typeof getDbaasMigrationStatusNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
