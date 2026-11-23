import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVpnConnectionRoute,
  postActionCreateVpnConnectionRoute,
} from '../routes'

export const getActionCreateVpnConnectionRouteHandler: RouteHandler<
  typeof getActionCreateVpnConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpnConnectionRouteHandler: RouteHandler<
  typeof postActionCreateVpnConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
