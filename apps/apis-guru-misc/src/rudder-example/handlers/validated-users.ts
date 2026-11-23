import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteValidatedUsersUsernameRoute, postValidatedUsersRoute } from '../routes'

export const postValidatedUsersRouteHandler: RouteHandler<typeof postValidatedUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteValidatedUsersUsernameRouteHandler: RouteHandler<
  typeof deleteValidatedUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
