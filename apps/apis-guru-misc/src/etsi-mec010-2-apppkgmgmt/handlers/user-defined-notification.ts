import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserDefinedNotificationRoute } from '../routes'

export const postUserDefinedNotificationRouteHandler: RouteHandler<
  typeof postUserDefinedNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
