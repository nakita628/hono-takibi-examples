import type { RouteHandler } from '@hono/zod-openapi'
import type { getDirectoryUsersIdRoute, getDirectoryUsersRoute } from '../routes'

export const getDirectoryUsersRouteHandler: RouteHandler<typeof getDirectoryUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDirectoryUsersIdRouteHandler: RouteHandler<
  typeof getDirectoryUsersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
