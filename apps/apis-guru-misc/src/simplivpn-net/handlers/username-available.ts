import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsernameAvailableRoute } from '../routes'

export const postUsernameAvailableRouteHandler: RouteHandler<
  typeof postUsernameAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
