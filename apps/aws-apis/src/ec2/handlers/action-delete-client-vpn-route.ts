import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteClientVpnRouteRoute,
  postActionDeleteClientVpnRouteRoute,
} from '../routes'

export const getActionDeleteClientVpnRouteRouteHandler: RouteHandler<
  typeof getActionDeleteClientVpnRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClientVpnRouteRouteHandler: RouteHandler<
  typeof postActionDeleteClientVpnRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
