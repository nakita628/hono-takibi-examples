import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionTerminateClientVpnConnectionsRoute,
  postActionTerminateClientVpnConnectionsRoute,
} from '../routes'

export const getActionTerminateClientVpnConnectionsRouteHandler: RouteHandler<
  typeof getActionTerminateClientVpnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTerminateClientVpnConnectionsRouteHandler: RouteHandler<
  typeof postActionTerminateClientVpnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
