import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationSettingsNotificationSettingIdRoute,
  getNotificationSettingsNotificationSettingIdRoute,
  getNotificationSettingsRoute,
  patchNotificationSettingsNotificationSettingIdRoute,
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

export const getNotificationSettingsNotificationSettingIdRouteHandler: RouteHandler<
  typeof getNotificationSettingsNotificationSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNotificationSettingsNotificationSettingIdRouteHandler: RouteHandler<
  typeof patchNotificationSettingsNotificationSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationSettingsNotificationSettingIdRouteHandler: RouteHandler<
  typeof deleteNotificationSettingsNotificationSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
