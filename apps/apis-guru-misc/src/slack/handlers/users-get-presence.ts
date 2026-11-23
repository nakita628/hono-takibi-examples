import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersGetPresenceRoute } from '../routes'

export const getUsersGetPresenceRouteHandler: RouteHandler<
  typeof getUsersGetPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
