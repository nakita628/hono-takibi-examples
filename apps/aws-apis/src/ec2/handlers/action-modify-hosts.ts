import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyHostsRoute, postActionModifyHostsRoute } from '../routes'

export const getActionModifyHostsRouteHandler: RouteHandler<
  typeof getActionModifyHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyHostsRouteHandler: RouteHandler<
  typeof postActionModifyHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
