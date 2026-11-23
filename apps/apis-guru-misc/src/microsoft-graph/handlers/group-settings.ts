import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupSettingsGroupSettingIdRoute,
  getGroupSettingsCountRoute,
  getGroupSettingsGroupSettingIdRoute,
  getGroupSettingsRoute,
  patchGroupSettingsGroupSettingIdRoute,
  postGroupSettingsRoute,
} from '../routes'

export const getGroupSettingsRouteHandler: RouteHandler<typeof getGroupSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGroupSettingsRouteHandler: RouteHandler<typeof postGroupSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGroupSettingsCountRouteHandler: RouteHandler<
  typeof getGroupSettingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupSettingsGroupSettingIdRouteHandler: RouteHandler<
  typeof deleteGroupSettingsGroupSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupSettingsGroupSettingIdRouteHandler: RouteHandler<
  typeof getGroupSettingsGroupSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGroupSettingsGroupSettingIdRouteHandler: RouteHandler<
  typeof patchGroupSettingsGroupSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
