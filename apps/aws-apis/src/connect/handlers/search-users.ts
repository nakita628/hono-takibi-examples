import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchUsersRoute } from '../routes'

export const postSearchUsersRouteHandler: RouteHandler<typeof postSearchUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
