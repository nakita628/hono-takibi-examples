import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCompleteMigrationRoute, postActionCompleteMigrationRoute } from '../routes'

export const getActionCompleteMigrationRouteHandler: RouteHandler<
  typeof getActionCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCompleteMigrationRouteHandler: RouteHandler<
  typeof postActionCompleteMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
