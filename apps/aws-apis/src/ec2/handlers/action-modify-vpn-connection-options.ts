import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVpnConnectionOptionsRoute,
  postActionModifyVpnConnectionOptionsRoute,
} from '../routes'

export const getActionModifyVpnConnectionOptionsRouteHandler: RouteHandler<
  typeof getActionModifyVpnConnectionOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpnConnectionOptionsRouteHandler: RouteHandler<
  typeof postActionModifyVpnConnectionOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
