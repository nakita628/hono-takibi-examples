import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetVpnConnectionDeviceTypesRoute,
  postActionGetVpnConnectionDeviceTypesRoute,
} from '../routes'

export const getActionGetVpnConnectionDeviceTypesRouteHandler: RouteHandler<
  typeof getActionGetVpnConnectionDeviceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetVpnConnectionDeviceTypesRouteHandler: RouteHandler<
  typeof postActionGetVpnConnectionDeviceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
