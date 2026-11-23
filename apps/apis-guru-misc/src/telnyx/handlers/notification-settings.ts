import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationSettingsIdRoute,
  getNotificationSettingsIdRoute,
  getNotificationSettingsRoute,
  postNotificationSettingsRoute,
} from '../routes'

export const getNotificationSettingsRouteHandler: RouteHandler<
  typeof getNotificationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationSettingsRouteHandler: RouteHandler<
  typeof postNotificationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationSettingsIdRouteHandler: RouteHandler<
  typeof deleteNotificationSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationSettingsIdRouteHandler: RouteHandler<
  typeof getNotificationSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
