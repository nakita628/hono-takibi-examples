import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetChatPermissionsRoute } from '../routes'

export const postSetChatPermissionsRouteHandler: RouteHandler<
  typeof postSetChatPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
