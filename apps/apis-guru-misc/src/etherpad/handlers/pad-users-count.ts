import type { RouteHandler } from '@hono/zod-openapi'
import type { getPadUsersCountRoute, postPadUsersCountRoute } from '../routes'

export const getPadUsersCountRouteHandler: RouteHandler<typeof getPadUsersCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPadUsersCountRouteHandler: RouteHandler<typeof postPadUsersCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
