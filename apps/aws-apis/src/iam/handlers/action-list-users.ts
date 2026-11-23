import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListUsersRoute, postActionListUsersRoute } from '../routes'

export const getActionListUsersRouteHandler: RouteHandler<typeof getActionListUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionListUsersRouteHandler: RouteHandler<
  typeof postActionListUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
