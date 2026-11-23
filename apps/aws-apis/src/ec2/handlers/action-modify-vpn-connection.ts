import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVpnConnectionRoute,
  postActionModifyVpnConnectionRoute,
} from '../routes'

export const getActionModifyVpnConnectionRouteHandler: RouteHandler<
  typeof getActionModifyVpnConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpnConnectionRouteHandler: RouteHandler<
  typeof postActionModifyVpnConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
