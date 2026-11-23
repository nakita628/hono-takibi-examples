import type { RouteHandler } from '@hono/zod-openapi'
import type { getDevListUsersRoute } from '../routes'

export const getDevListUsersRouteHandler: RouteHandler<typeof getDevListUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
