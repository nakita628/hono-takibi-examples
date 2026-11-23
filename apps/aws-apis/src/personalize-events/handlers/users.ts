import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersRoute } from '../routes'

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
