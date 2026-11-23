import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthorizationUsersRoute } from '../routes'

export const getAuthorizationUsersRouteHandler: RouteHandler<
  typeof getAuthorizationUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
