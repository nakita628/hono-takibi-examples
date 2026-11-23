import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateIpamScopeRoute, postActionCreateIpamScopeRoute } from '../routes'

export const getActionCreateIpamScopeRouteHandler: RouteHandler<
  typeof getActionCreateIpamScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateIpamScopeRouteHandler: RouteHandler<
  typeof postActionCreateIpamScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
