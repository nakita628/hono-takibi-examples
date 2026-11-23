import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryBannedUsersRoute } from '../routes'

export const getQueryBannedUsersRouteHandler: RouteHandler<
  typeof getQueryBannedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
