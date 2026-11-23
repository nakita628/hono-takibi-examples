import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateClientVpnRouteRoute,
  postActionCreateClientVpnRouteRoute,
} from '../routes'

export const getActionCreateClientVpnRouteRouteHandler: RouteHandler<
  typeof getActionCreateClientVpnRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClientVpnRouteRouteHandler: RouteHandler<
  typeof postActionCreateClientVpnRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
