import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserBadgesUsernameJsonRoute } from '../routes'

export const getUserBadgesUsernameJsonRouteHandler: RouteHandler<
  typeof getUserBadgesUsernameJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
