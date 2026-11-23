import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersListRoute } from '../routes'

export const postUsersListRouteHandler: RouteHandler<typeof postUsersListRoute> = async (c) => {
  throw new Error('Not implemented')
}
