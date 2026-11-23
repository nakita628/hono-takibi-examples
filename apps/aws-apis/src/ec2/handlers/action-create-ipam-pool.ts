import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateIpamPoolRoute, postActionCreateIpamPoolRoute } from '../routes'

export const getActionCreateIpamPoolRouteHandler: RouteHandler<
  typeof getActionCreateIpamPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateIpamPoolRouteHandler: RouteHandler<
  typeof postActionCreateIpamPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
