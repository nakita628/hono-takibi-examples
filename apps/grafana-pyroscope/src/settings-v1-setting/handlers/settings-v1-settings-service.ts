import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSettingsV1SettingsServiceDeleteRoute,
  postSettingsV1SettingsServiceGetRoute,
  postSettingsV1SettingsServiceSetRoute,
} from '../routes'

export const postSettingsV1SettingsServiceDeleteRouteHandler: RouteHandler<
  typeof postSettingsV1SettingsServiceDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsV1SettingsServiceGetRouteHandler: RouteHandler<
  typeof postSettingsV1SettingsServiceGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsV1SettingsServiceSetRouteHandler: RouteHandler<
  typeof postSettingsV1SettingsServiceSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
