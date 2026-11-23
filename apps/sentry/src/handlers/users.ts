import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersUserIdIndexRoute } from '../routes'

export const getUsersUserIdIndexRouteHandler: RouteHandler<
  typeof getUsersUserIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
