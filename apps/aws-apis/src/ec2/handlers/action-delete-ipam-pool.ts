import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteIpamPoolRoute, postActionDeleteIpamPoolRoute } from '../routes'

export const getActionDeleteIpamPoolRouteHandler: RouteHandler<
  typeof getActionDeleteIpamPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIpamPoolRouteHandler: RouteHandler<
  typeof postActionDeleteIpamPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
