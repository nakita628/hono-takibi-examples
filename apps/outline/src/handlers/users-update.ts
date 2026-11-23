import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersUpdateRoute } from '../routes'

export const postUsersUpdateRouteHandler: RouteHandler<typeof postUsersUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}
