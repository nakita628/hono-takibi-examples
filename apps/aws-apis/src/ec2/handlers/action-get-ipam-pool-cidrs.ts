import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetIpamPoolCidrsRoute, postActionGetIpamPoolCidrsRoute } from '../routes'

export const getActionGetIpamPoolCidrsRouteHandler: RouteHandler<
  typeof getActionGetIpamPoolCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIpamPoolCidrsRouteHandler: RouteHandler<
  typeof postActionGetIpamPoolCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
