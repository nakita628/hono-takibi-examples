import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVpnConnectionRouteRoute,
  postActionCreateVpnConnectionRouteRoute,
} from '../routes'

export const getActionCreateVpnConnectionRouteRouteHandler: RouteHandler<
  typeof getActionCreateVpnConnectionRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpnConnectionRouteRouteHandler: RouteHandler<
  typeof postActionCreateVpnConnectionRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
