import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotificationsPubkeyRoute, postNotificationsRegisterRoute } from '../routes'

export const getNotificationsPubkeyRouteHandler: RouteHandler<
  typeof getNotificationsPubkeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsRegisterRouteHandler: RouteHandler<
  typeof postNotificationsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
