import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersProfileSetRoute } from '../routes'

export const postUsersProfileSetRouteHandler: RouteHandler<
  typeof postUsersProfileSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
