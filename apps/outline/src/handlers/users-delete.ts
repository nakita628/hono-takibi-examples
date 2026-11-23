import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersDeleteRoute } from '../routes'

export const postUsersDeleteRouteHandler: RouteHandler<typeof postUsersDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
