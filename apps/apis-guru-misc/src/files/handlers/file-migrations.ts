import type { RouteHandler } from '@hono/zod-openapi'
import type { getFileMigrationsIdRoute } from '../routes'

export const getFileMigrationsIdRouteHandler: RouteHandler<
  typeof getFileMigrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
