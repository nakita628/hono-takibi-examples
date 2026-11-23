import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionExportClientVpnClientConfigurationRoute,
  postActionExportClientVpnClientConfigurationRoute,
} from '../routes'

export const getActionExportClientVpnClientConfigurationRouteHandler: RouteHandler<
  typeof getActionExportClientVpnClientConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionExportClientVpnClientConfigurationRouteHandler: RouteHandler<
  typeof postActionExportClientVpnClientConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
