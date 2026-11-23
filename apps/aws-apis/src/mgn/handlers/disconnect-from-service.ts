import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisconnectFromServiceRoute } from '../routes'

export const postDisconnectFromServiceRouteHandler: RouteHandler<
  typeof postDisconnectFromServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
