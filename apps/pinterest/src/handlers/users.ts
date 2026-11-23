import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersUsernameInterestsFollowRoute } from '../routes'

export const getUsersUsernameInterestsFollowRouteHandler: RouteHandler<
  typeof getUsersUsernameInterestsFollowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
