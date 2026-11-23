import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersJsonRoute } from '../routes'

export const postUsersJsonRouteHandler: RouteHandler<typeof postUsersJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
