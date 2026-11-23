import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersUseridPhotoRoute, getUsersUsernameRoute } from '../routes'

export const getUsersUsernameRouteHandler: RouteHandler<typeof getUsersUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUseridPhotoRouteHandler: RouteHandler<
  typeof getUsersUseridPhotoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
