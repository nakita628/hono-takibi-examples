import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStartMigrationRoute, postActionStartMigrationRoute } from '../routes'

export const getActionStartMigrationRouteHandler: RouteHandler<
  typeof getActionStartMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartMigrationRouteHandler: RouteHandler<
  typeof postActionStartMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
