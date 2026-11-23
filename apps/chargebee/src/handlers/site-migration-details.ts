import type { RouteHandler } from '@hono/zod-openapi'
import type { getSiteMigrationDetailsRoute } from '../routes'

export const getSiteMigrationDetailsRouteHandler: RouteHandler<
  typeof getSiteMigrationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
