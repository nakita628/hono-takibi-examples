import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVpnConnectionRoute,
  postActionDeleteVpnConnectionRoute,
} from '../routes'

export const getActionDeleteVpnConnectionRouteHandler: RouteHandler<
  typeof getActionDeleteVpnConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVpnConnectionRouteHandler: RouteHandler<
  typeof postActionDeleteVpnConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
