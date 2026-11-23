import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVpnConnectionRouteRoute,
  postActionDeleteVpnConnectionRouteRoute,
} from '../routes'

export const getActionDeleteVpnConnectionRouteRouteHandler: RouteHandler<
  typeof getActionDeleteVpnConnectionRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVpnConnectionRouteRouteHandler: RouteHandler<
  typeof postActionDeleteVpnConnectionRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
