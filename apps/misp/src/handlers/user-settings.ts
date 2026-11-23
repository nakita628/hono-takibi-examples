import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserSettingsDeleteUserSettingIdRoute,
  getUserSettingsGetSettingUserIdUserSettingNameRoute,
  getUserSettingsRoute,
  getUserSettingsViewUserSettingIdRoute,
  postUserSettingsRoute,
  postUserSettingsSetSettingUserIdUserSettingNameRoute,
} from '../routes'

export const getUserSettingsRouteHandler: RouteHandler<typeof getUserSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSettingsRouteHandler: RouteHandler<typeof postUserSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserSettingsViewUserSettingIdRouteHandler: RouteHandler<
  typeof getUserSettingsViewUserSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSettingsSetSettingUserIdUserSettingNameRouteHandler: RouteHandler<
  typeof postUserSettingsSetSettingUserIdUserSettingNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserSettingsGetSettingUserIdUserSettingNameRouteHandler: RouteHandler<
  typeof getUserSettingsGetSettingUserIdUserSettingNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserSettingsDeleteUserSettingIdRouteHandler: RouteHandler<
  typeof deleteUserSettingsDeleteUserSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
