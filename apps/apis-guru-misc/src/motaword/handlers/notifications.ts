import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotificationsSubscribeRoute, postNotificationsUnsubscribeRoute } from '../routes'

export const postNotificationsSubscribeRouteHandler: RouteHandler<
  typeof postNotificationsSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsUnsubscribeRouteHandler: RouteHandler<
  typeof postNotificationsUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
