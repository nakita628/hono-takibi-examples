import type { RouteHandler } from '@hono/zod-openapi'
import type { postFdxNotificationsRoute } from '../routes'

export const postFdxNotificationsRouteHandler: RouteHandler<
  typeof postFdxNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
