import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteIpamScopeRoute, postActionDeleteIpamScopeRoute } from '../routes'

export const getActionDeleteIpamScopeRouteHandler: RouteHandler<
  typeof getActionDeleteIpamScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIpamScopeRouteHandler: RouteHandler<
  typeof postActionDeleteIpamScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
