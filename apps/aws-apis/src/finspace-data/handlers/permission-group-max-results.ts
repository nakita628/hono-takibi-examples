import type { RouteHandler } from '@hono/zod-openapi'
import type { getPermissionGroupMaxResultsRoute } from '../routes'

export const getPermissionGroupMaxResultsRouteHandler: RouteHandler<
  typeof getPermissionGroupMaxResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
