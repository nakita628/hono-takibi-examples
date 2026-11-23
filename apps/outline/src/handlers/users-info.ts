import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersInfoRoute } from '../routes'

export const postUsersInfoRouteHandler: RouteHandler<typeof postUsersInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
