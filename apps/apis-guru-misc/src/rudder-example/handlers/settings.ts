import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSettingsAllowedNetworksNodeIdRoute,
  getSettingsRoute,
  getSettingsSettingIdRoute,
  postSettingsAllowedNetworksNodeIdDiffRoute,
  postSettingsAllowedNetworksNodeIdRoute,
  postSettingsSettingIdRoute,
} from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsAllowedNetworksNodeIdRouteHandler: RouteHandler<
  typeof getSettingsAllowedNetworksNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsAllowedNetworksNodeIdRouteHandler: RouteHandler<
  typeof postSettingsAllowedNetworksNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsAllowedNetworksNodeIdDiffRouteHandler: RouteHandler<
  typeof postSettingsAllowedNetworksNodeIdDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsSettingIdRouteHandler: RouteHandler<
  typeof getSettingsSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsSettingIdRouteHandler: RouteHandler<
  typeof postSettingsSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
