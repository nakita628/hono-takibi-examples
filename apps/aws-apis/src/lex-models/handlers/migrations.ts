import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMigrationsMigrationIdRoute,
  getMigrationsRoute,
  postMigrationsRoute,
} from '../routes'

export const getMigrationsMigrationIdRouteHandler: RouteHandler<
  typeof getMigrationsMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMigrationsRouteHandler: RouteHandler<typeof getMigrationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMigrationsRouteHandler: RouteHandler<typeof postMigrationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
