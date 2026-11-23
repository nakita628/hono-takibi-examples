import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyIpamScopeRoute, postActionModifyIpamScopeRoute } from '../routes'

export const getActionModifyIpamScopeRouteHandler: RouteHandler<
  typeof getActionModifyIpamScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIpamScopeRouteHandler: RouteHandler<
  typeof postActionModifyIpamScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
