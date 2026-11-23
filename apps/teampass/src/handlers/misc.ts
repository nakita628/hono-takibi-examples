import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMiscRefreshExtensionSettingsRoute,
  postMiscRefreshExtensionSettingsRoute,
} from '../routes'

export const getMiscRefreshExtensionSettingsRouteHandler: RouteHandler<
  typeof getMiscRefreshExtensionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMiscRefreshExtensionSettingsRouteHandler: RouteHandler<
  typeof postMiscRefreshExtensionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
