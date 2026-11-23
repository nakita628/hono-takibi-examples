import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNotificationsNotificationIdLogsRoute,
  getNotificationsNotificationIdRoute,
  getNotificationsRoute,
  postNotificationsNotificationIdReplayRoute,
} from '../routes'

export const getNotificationsRouteHandler: RouteHandler<typeof getNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNotificationsNotificationIdRouteHandler: RouteHandler<
  typeof getNotificationsNotificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsNotificationIdLogsRouteHandler: RouteHandler<
  typeof getNotificationsNotificationIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsNotificationIdReplayRouteHandler: RouteHandler<
  typeof postNotificationsNotificationIdReplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
