import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyIpamPoolRoute, postActionModifyIpamPoolRoute } from '../routes'

export const getActionModifyIpamPoolRouteHandler: RouteHandler<
  typeof getActionModifyIpamPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIpamPoolRouteHandler: RouteHandler<
  typeof postActionModifyIpamPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
